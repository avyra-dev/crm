import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Business } from 'src/businesses/schemas/business.schema';
import { User } from 'src/users/schemas/user.schema';
import { CrmObject } from './object.schema';

export type BusinessObjectMapDocument = BusinessObjectMap & Document;

@Schema({
  collection: 'business_object_maps',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
})
export class BusinessObjectMap {
  @Prop({ type: Types.ObjectId, ref: User.name, required: true, index: true })
  user_id: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: Business.name, required: true, index: true })
  business_id: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: CrmObject.name, required: true, index: true })
  object_id: Types.ObjectId;

  @Prop({ default: 1 })
  status: number;

  @Prop({ type: Date, default: null })
  deleted_at: Date | null;
}

export const BusinessObjectMapSchema = SchemaFactory.createForClass(BusinessObjectMap);

BusinessObjectMapSchema.index(
  { user_id: 1, business_id: 1, object_id: 1 },
  { unique: true, name: 'uniq_user_business_object_map' },
);
BusinessObjectMapSchema.index({ user_id: 1, object_id: 1, deleted_at: 1 });
