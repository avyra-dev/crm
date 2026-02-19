import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes, Types } from 'mongoose';
import { Business } from 'src/businesses/schemas/business.schema';
import { CrmObject } from 'src/objects/schemas/object.schema';
import { User } from 'src/users/schemas/user.schema';

export type ObjectRecordDocument = ObjectRecord & Document;

@Schema({
  collection: 'object_records',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
})
export class ObjectRecord {
  @Prop({ type: Types.ObjectId, ref: User.name, required: true, index: true })
  user_id: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: CrmObject.name, required: true, index: true })
  object_id: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: Business.name, default: null, index: true })
  business_id: Types.ObjectId | null;

  @Prop({ type: Map, of: SchemaTypes.Mixed, default: {} })
  values: Record<string, unknown>;

  @Prop({ default: 1 })
  status: number;

  @Prop({ type: Date, default: null })
  deleted_at: Date | null;
}

export const ObjectRecordSchema = SchemaFactory.createForClass(ObjectRecord);

ObjectRecordSchema.index({ user_id: 1, object_id: 1, business_id: 1, deleted_at: 1 });
ObjectRecordSchema.index({ user_id: 1, object_id: 1, created_at: -1 });
