import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from 'src/users/schemas/user.schema';

export type CrmObjectDocument = CrmObject & Document;

@Schema({
  collection: 'objects',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
})
export class CrmObject {
  @Prop({ type: Types.ObjectId, ref: User.name, required: true, index: true })
  user_id: Types.ObjectId;

  @Prop({ required: true, trim: true })
  name: string;

  @Prop({ required: true, trim: true, lowercase: true })
  key: string;

  @Prop({ type: String, default: null, trim: true })
  description: string | null;

  @Prop({ default: 1 })
  status: number;

  @Prop({ type: Date, default: null })
  deleted_at: Date | null;
}

export const CrmObjectSchema = SchemaFactory.createForClass(CrmObject);

CrmObjectSchema.index({ user_id: 1, key: 1, deleted_at: 1 });
