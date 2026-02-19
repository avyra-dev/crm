import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from 'src/users/schemas/user.schema';

export type CrmFieldDocument = CrmField & Document;

@Schema({
  collection: 'fields',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
})
export class CrmField {
  @Prop({ type: Types.ObjectId, ref: User.name, required: true, index: true })
  user_id: Types.ObjectId;

  @Prop({ required: true, trim: true })
  name: string;

  @Prop({ required: true, trim: true, lowercase: true })
  key: string;

  @Prop({ required: true, trim: true, lowercase: true, default: 'text' })
  type: string;

  @Prop({ type: String, default: null, trim: true })
  description: string | null;

  @Prop({ type: Boolean, default: false })
  is_required: boolean;

  @Prop({ type: [String], default: [] })
  options: string[];

  @Prop({ default: 1 })
  status: number;

  @Prop({ type: Date, default: null })
  deleted_at: Date | null;
}

export const CrmFieldSchema = SchemaFactory.createForClass(CrmField);

CrmFieldSchema.index({ user_id: 1, key: 1, deleted_at: 1 });
