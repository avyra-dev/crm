import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from 'src/users/schemas/user.schema';

export type BusinessThemeDocument = BusinessTheme & Document;

@Schema({ _id: false })
export class ThemeTokens {
  @Prop({ required: true, trim: true })
  primary: string;

  @Prop({ required: true, trim: true })
  primaryHover: string;

  @Prop({ required: true, trim: true })
  primaryContrast: string;

  @Prop({ required: true, trim: true })
  accentStart: string;

  @Prop({ required: true, trim: true })
  accentEnd: string;

  @Prop({ required: true, trim: true })
  textPrimary: string;

  @Prop({ required: true, trim: true })
  textSecondary: string;

  @Prop({ required: true, trim: true })
  textMuted: string;

  @Prop({ required: true, trim: true })
  bgApp: string;

  @Prop({ required: true, trim: true })
  bgSurface: string;

  @Prop({ required: true, trim: true })
  bgSurfaceSoft: string;

  @Prop({ required: true, trim: true })
  border: string;

  @Prop({ required: true, trim: true })
  danger: string;

  @Prop({ required: true, trim: true })
  dangerHover: string;

  @Prop({ required: true, trim: true })
  success: string;
}

const ThemeTokensSchema = SchemaFactory.createForClass(ThemeTokens);

@Schema({
  collection: 'business_themes',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
})
export class BusinessTheme {
  @Prop({ type: Types.ObjectId, ref: User.name, required: true, index: true })
  user_id: Types.ObjectId;

  @Prop({ type: Types.ObjectId, default: null, index: true })
  business_id: Types.ObjectId | null;

  @Prop({ required: true, trim: true, lowercase: true, default: 'default', index: true })
  name: string;

  @Prop({ type: ThemeTokensSchema, required: true })
  theme: ThemeTokens;

  @Prop({ default: 1 })
  status: number;

  @Prop({ type: Date, default: null })
  deleted_at: Date | null;
}

export const BusinessThemeSchema = SchemaFactory.createForClass(BusinessTheme);

BusinessThemeSchema.index({ user_id: 1, business_id: 1, name: 1 }, { unique: true });
