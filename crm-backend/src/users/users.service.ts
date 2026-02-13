import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { createHash, randomBytes, randomInt } from 'crypto';
import { User, UserDocument } from './schemas/user.schema';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private configService: ConfigService,
    private jwtService: JwtService,
  ) {}

  private static OTP_LENGTH = 6;
  private static OTP_TTL_MS = 5 * 60 * 1000;
  private static OTP_MAX_ATTEMPTS = 5;
  private static OTP_LOCK_MS = 15 * 60 * 1000;

  private hashOtp(otp: string, salt: string): string {
    const secret = this.configService.get<string>('HASH_SECRET') ?? '';
    return createHash('sha256').update(`${secret}:${salt}:${otp}`).digest('hex');
  }

  private generateOtp(): { otp: string; salt: string; hash: string } {
    const min = 10 ** (UsersService.OTP_LENGTH - 1);
    const max = 10 ** UsersService.OTP_LENGTH - 1;
    const otp = randomInt(min, max + 1).toString();
    const salt = randomBytes(16).toString('hex');
    const hash = this.hashOtp(otp, salt);
    return { otp, salt, hash };
  }

  async seedUsers() {
    const users = Array.from({ length: 10 }).map((_, i) => ({
      name: `User ${i + 1}`,
      email: `user${i + 1}@example.com`,
      phone_number: `900000000${i}`,
      status: 1,
      deleted_at: null,
    }));

    await this.userModel.insertMany(users);
    return { message: '10 users seeded successfully' };
  }

  async findAll() {
    return this.userModel.find();
  }

  async getProfile(userId: string) {
    const user = await this.userModel.findById(userId);
    if (!user) {
      return { message: 'User not found', status: false, statusCode: 404 };
    }

    return {
      message: 'Profile retrieved successfully',
      status: true,
      statusCode: 200,
      data: this.toProfile(user),
    };
  }

  async sendOtp(phone_number: string) {
    const user = await this.userModel.findOne({ phone_number });

    if (!user) {
      return { message: 'User not found', status: false, statusCode: 404 };
    }

    const now = new Date();
    if (user.otp_locked_until && user.otp_locked_until > now) {
      return { message: 'OTP temporarily locked due to failed attempts', status: false, statusCode: 429 };
    }

    const { otp, salt, hash } = this.generateOtp();
    const expiresAt = new Date(now.getTime() + UsersService.OTP_TTL_MS);

    user.otp_hash = hash;
    user.otp_salt = salt;
    user.otp_expires_at = expiresAt;
    user.otp_attempts = 0;
    user.otp_locked_until = null;
    user.otp_last_sent_at = now;
    await user.save();

    // Simulate sending OTP
    return {
      message: 'OTP sent successfully',
      status: true,
      statusCode: 200,
      data: { expires_at: expiresAt, otp: otp },
    };
  }

  async verifyOtp(phone_number: string, otp: string) {
    const user = await this.userModel.findOne({ phone_number });

    if (!user) {
      return { message: 'User not found', status: false, statusCode: 404 };
    }

    const now = new Date();
    if (user.otp_locked_until && user.otp_locked_until > now) {
      return { message: 'OTP temporarily locked due to failed attempts', status: false, statusCode: 429 };
    }

    if (!user.otp_hash || !user.otp_salt || !user.otp_expires_at) {
      return { message: 'OTP not requested', status: false, statusCode: 400 };
    }

    if (user.otp_expires_at <= now) {
      return { message: 'OTP expired', status: false, statusCode: 400 };
    }

    const incomingHash = this.hashOtp(otp, user.otp_salt);
    if (incomingHash !== user.otp_hash) {
      const attempts = (user.otp_attempts ?? 0) + 1;
      user.otp_attempts = attempts;
      if (attempts >= UsersService.OTP_MAX_ATTEMPTS) {
        user.otp_locked_until = new Date(now.getTime() + UsersService.OTP_LOCK_MS);
      }
      await user.save();
      return { message: 'Invalid OTP', status: false, statusCode: 400 };
    }

    user.otp_hash = null;
    user.otp_salt = null;
    user.otp_expires_at = null;
    user.otp_attempts = 0;
    user.otp_locked_until = null;
    await user.save();

    const payload = { sub: user._id.toString(), phone_number: user.phone_number };
    const token = await this.jwtService.signAsync(payload);
    return {
      message: 'OTP verified successfully',
      status: true,
      statusCode: 200,
      data: { token, user: this.toProfile(user) },
    };
  }

  private toProfile(user: UserDocument) {
    return {
      id: user._id.toString(),
      name: user.name,
      email: user.email ?? null,
      phone_number: user.phone_number,
      status: user.status,
      created_at: (user as any).created_at ?? null,
      updated_at: (user as any).updated_at ?? null,
    };
  }
}
