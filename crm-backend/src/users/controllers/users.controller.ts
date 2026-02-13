import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { UsersService } from '../users.service';
import type { ApiResponseObject } from 'src/common/dto/response';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getUsers(): Promise<ApiResponseObject> {
    return { message: 'Users retrieved successfully', data: await this.usersService.findAll(), status: 'success' };
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  async getProfile(@Req() req: any): Promise<ApiResponseObject> {
    const result = await this.usersService.getProfile(req.user.sub);
    return { message: result.message, data: result.data ?? null, status: result.status ? 'success' : 'error' };
  }

  @Post('otp')
  async sendOtp(@Body() sendOtp: any): Promise<ApiResponseObject> {
    const otp = await this.usersService.sendOtp(sendOtp.phone_number);
    return { message: otp.message, data: otp.data ?? null, status: otp.status ? 'success' : 'error' };
  }

  @Post('otp/verify')
  async verifyOtp(@Body() verifyOtp: any): Promise<ApiResponseObject> {
    const result = await this.usersService.verifyOtp(verifyOtp.phone_number, verifyOtp.otp);
    return { message: result.message, data: result.data ?? null, status: result.status ? 'success' : 'error' };
  }
}
