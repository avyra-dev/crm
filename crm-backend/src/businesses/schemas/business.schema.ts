import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from 'src/users/schemas/user.schema';

export type BusinessDocument = Business & Document;

@Schema({
  collection: 'businesses',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
})
export class Business {
  @Prop({ type: Types.ObjectId, ref: User.name, required: true, index: true })
  user_id: Types.ObjectId;

  @Prop({ required: true, trim: true })
  name: string;

  @Prop({ type: String, default: null, trim: true })
  logo_path: string | null;

  @Prop({ default: 1 })
  status: number;

  @Prop({ required: true, trim: true })
  type: string;

  @Prop({ type: Date, default: null })
  deleted_at: Date | null;
}

export const BusinessSchema = SchemaFactory.createForClass(Business);

BusinessSchema.index({ user_id: 1, name: 1, deleted_at: 1 });
