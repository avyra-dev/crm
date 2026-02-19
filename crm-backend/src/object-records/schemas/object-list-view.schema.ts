import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Business } from 'src/businesses/schemas/business.schema';
import { CrmObject } from 'src/objects/schemas/object.schema';
import { User } from 'src/users/schemas/user.schema';

export type ObjectListViewDocument = ObjectListView & Document;

@Schema({
  collection: 'object_list_views',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
})
export class ObjectListView {
  @Prop({ type: Types.ObjectId, ref: User.name, required: true, index: true })
  user_id: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: CrmObject.name, required: true, index: true })
  object_id: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: Business.name, default: null, index: true })
  business_id: Types.ObjectId | null;

  @Prop({ required: true, trim: true })
  name: string;

  @Prop({ type: [Types.ObjectId], default: [] })
  visible_field_ids: Types.ObjectId[];

  @Prop({ type: Boolean, default: false })
  is_default: boolean;

  @Prop({ default: 1 })
  status: number;

  @Prop({ type: Date, default: null })
  deleted_at: Date | null;
}

export const ObjectListViewSchema = SchemaFactory.createForClass(ObjectListView);

ObjectListViewSchema.index({ user_id: 1, object_id: 1, business_id: 1, deleted_at: 1 });
ObjectListViewSchema.index({ user_id: 1, object_id: 1, business_id: 1, is_default: 1, deleted_at: 1 });
