import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
})
export class User {
  @Prop({ required: true, trim: true })
  name: string;

  @Prop({ required: false, lowercase: true, trim: true })
  email?: string;

  @Prop({ required: true, unique: true })
  phone_number: string;

  @Prop({ type: String, default: null })
  otp_hash: string | null;

  @Prop({ type: String, default: null })
  otp_salt: string | null;

  @Prop({ type: Date, default: null })
  otp_expires_at: Date | null;

  @Prop({ type: Number, default: 0 })
  otp_attempts: number;

  @Prop({ type: Date, default: null })
  otp_locked_until: Date | null;

  @Prop({ type: Date, default: null })
  otp_last_sent_at: Date | null;

  @Prop({ default: 1 })
  status: number;

  @Prop({ type: Date, default: null })
  deleted_at: Date | null;
}

export const UserSchema = SchemaFactory.createForClass(User);
