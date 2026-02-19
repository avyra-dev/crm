import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Business } from 'src/businesses/schemas/business.schema';
import { CrmObject } from 'src/objects/schemas/object.schema';
import { User } from 'src/users/schemas/user.schema';
import { CrmField } from './field.schema';

export type ObjectFieldMapDocument = ObjectFieldMap & Document;

@Schema({
  collection: 'object_field_maps',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
})
export class ObjectFieldMap {
  @Prop({ type: Types.ObjectId, ref: User.name, required: true, index: true })
  user_id: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: CrmObject.name, required: true, index: true })
  object_id: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: CrmField.name, required: true, index: true })
  field_id: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: Business.name, default: null, index: true })
  business_id: Types.ObjectId | null;

  @Prop({ default: 1 })
  status: number;

  @Prop({ type: Date, default: null })
  deleted_at: Date | null;
}

export const ObjectFieldMapSchema = SchemaFactory.createForClass(ObjectFieldMap);

ObjectFieldMapSchema.index(
  { user_id: 1, object_id: 1, field_id: 1, business_id: 1 },
  { unique: true, name: 'uniq_user_object_field_map' },
);
ObjectFieldMapSchema.index({ user_id: 1, field_id: 1, deleted_at: 1 });
ObjectFieldMapSchema.index({ user_id: 1, object_id: 1, business_id: 1, deleted_at: 1 });
