import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Business, BusinessDocument } from 'src/businesses/schemas/business.schema';
import {
  BusinessObjectMap,
  BusinessObjectMapDocument,
} from 'src/objects/schemas/business-object-map.schema';
import { CrmObject, CrmObjectDocument } from 'src/objects/schemas/object.schema';
import { CrmField, CrmFieldDocument } from './schemas/field.schema';
import { ObjectFieldMap, ObjectFieldMapDocument } from './schemas/object-field-map.schema';

const ALLOWED_FIELD_TYPES = [
  'text',
  'textarea',
  'number',
  'date',
  'datetime',
  'boolean',
  'email',
  'phone',
  'select',
] as const;

type FieldType = (typeof ALLOWED_FIELD_TYPES)[number];

interface FieldPayload {
  name?: string;
  key?: string;
  type?: string;
  description?: string | null;
  is_required?: boolean | number | string | null;
  options?: string[] | string | null;
  status?: number | string | null;
  object_id?: string | null;
  business_id?: string | null;
}

interface FieldObjectMapPayload {
  object_id?: string | null;
  business_id?: string | null;
}

interface FieldMappingEntry {
  object_id: string;
  business_id: string | null;
}

@Injectable()
export class FieldsService {
  constructor(
    @InjectModel(CrmField.name)
    private readonly fieldModel: Model<CrmFieldDocument>,
    @InjectModel(ObjectFieldMap.name)
    private readonly objectFieldMapModel: Model<ObjectFieldMapDocument>,
    @InjectModel(Business.name)
    private readonly businessModel: Model<BusinessDocument>,
    @InjectModel(CrmObject.name)
    private readonly objectModel: Model<CrmObjectDocument>,
    @InjectModel(BusinessObjectMap.name)
    private readonly businessObjectMapModel: Model<BusinessObjectMapDocument>,
  ) {}

  async createField(userId: string, payload: FieldPayload) {
    const userObjectId = new Types.ObjectId(userId);
    const validation = await this.validateCreatePayload(userObjectId, payload);
    if (!validation.valid) {
      return {
        message: validation.message,
        status: false,
        statusCode: validation.statusCode ?? 400,
      };
    }

    const duplicate = await this.fieldModel.findOne({
      user_id: userObjectId,
      key: validation.key,
      deleted_at: null,
    });
    if (duplicate) {
      return {
        message: 'Field key already exists for this user',
        status: false,
        statusCode: 409,
      };
    }

    const fieldRecord = await this.fieldModel.create({
      user_id: userObjectId,
      name: validation.name,
      key: validation.key,
      type: validation.type,
      description: validation.description,
      is_required: validation.is_required,
      options: validation.options,
      status: validation.status,
      deleted_at: null,
    });

    if (validation.object_id) {
      await this.upsertObjectMapping(
        userObjectId,
        fieldRecord._id,
        validation.object_id,
        validation.business_id,
      );
    }

    const mappings = await this.findMappingsForField(userObjectId, fieldRecord._id);
    return {
      message: 'Field created successfully',
      status: true,
      statusCode: 201,
      data: this.toFieldResponse(fieldRecord, mappings),
    };
  }

  async mapFieldToObject(userId: string, fieldId: string, payload: FieldObjectMapPayload) {
    const userObjectId = new Types.ObjectId(userId);
    const fieldObjectId = this.parseObjectId(fieldId);
    if (!fieldObjectId) {
      return { message: 'Invalid field id', status: false, statusCode: 400 };
    }

    const fieldRecord = await this.fieldModel.findOne({
      _id: fieldObjectId,
      user_id: userObjectId,
      deleted_at: null,
    });
    if (!fieldRecord) {
      return { message: 'Field not found', status: false, statusCode: 404 };
    }

    const businessContext = await this.resolveBusinessContext(userObjectId, payload?.business_id ?? null);
    if (!businessContext.valid) {
      return {
        message: businessContext.message,
        status: false,
        statusCode: businessContext.statusCode ?? 400,
      };
    }

    const objectContext = await this.resolveObjectContext(
      userObjectId,
      payload?.object_id ?? null,
      businessContext.business_id,
    );
    if (!objectContext.valid || !objectContext.object_id) {
      return {
        message: objectContext.message ?? 'Object id is required',
        status: false,
        statusCode: objectContext.statusCode ?? 400,
      };
    }

    await this.upsertObjectMapping(
      userObjectId,
      fieldObjectId,
      objectContext.object_id,
      businessContext.business_id,
    );

    const mappings = await this.findMappingsForField(userObjectId, fieldObjectId);
    return {
      message: 'Field mapped to object successfully',
      status: true,
      statusCode: 200,
      data: this.toFieldResponse(fieldRecord, mappings),
    };
  }

  async unmapFieldFromObject(userId: string, fieldId: string, objectId: string, businessId?: string | null) {
    const userObjectId = new Types.ObjectId(userId);
    const fieldObjectId = this.parseObjectId(fieldId);
    const objectObjectId = this.parseObjectId(objectId);
    if (!fieldObjectId) {
      return { message: 'Invalid field id', status: false, statusCode: 400 };
    }
    if (!objectObjectId) {
      return { message: 'Invalid object id', status: false, statusCode: 400 };
    }

    const businessContext = await this.resolveBusinessContext(userObjectId, businessId ?? null);
    if (!businessContext.valid) {
      return {
        message: businessContext.message,
        status: false,
        statusCode: businessContext.statusCode ?? 400,
      };
    }

    const now = new Date();
    const unmapResult = await this.objectFieldMapModel.findOneAndUpdate(
      {
        user_id: userObjectId,
        field_id: fieldObjectId,
        object_id: objectObjectId,
        business_id: businessContext.business_id ?? null,
        deleted_at: null,
      },
      {
        $set: {
          status: 0,
          deleted_at: now,
        },
      },
      { returnDocument: 'after' },
    );

    if (!unmapResult) {
      return {
        message: 'Field mapping not found',
        status: false,
        statusCode: 404,
      };
    }

    const fieldRecord = await this.fieldModel.findOne({
      _id: fieldObjectId,
      user_id: userObjectId,
      deleted_at: null,
    });

    const mappings = await this.findMappingsForField(userObjectId, fieldObjectId);
    return {
      message: 'Field unmapped from object successfully',
      status: true,
      statusCode: 200,
      data: this.toFieldResponse(fieldRecord, mappings),
    };
  }

  async findAll(userId: string, businessId?: string | null, objectId?: string | null) {
    const userObjectId = new Types.ObjectId(userId);

    let fieldRecords: CrmFieldDocument[] = [];
    if (objectId) {
      const businessContext = await this.resolveBusinessContext(userObjectId, businessId ?? null);
      if (!businessContext.valid) {
        return {
          message: businessContext.message,
          status: false,
          statusCode: businessContext.statusCode ?? 400,
        };
      }

      const objectContext = await this.resolveObjectContext(
        userObjectId,
        objectId,
        businessContext.business_id,
      );
      if (!objectContext.valid || !objectContext.object_id) {
        return {
          message: objectContext.message ?? 'Object not found',
          status: false,
          statusCode: objectContext.statusCode ?? 400,
        };
      }

      const mappingFilter: Record<string, any> = {
        user_id: userObjectId,
        object_id: objectContext.object_id,
        deleted_at: null,
      };

      if (businessContext.business_id) {
        mappingFilter.$or = [{ business_id: businessContext.business_id }, { business_id: null }];
      } else {
        mappingFilter.business_id = null;
      }

      const mappings = await this.objectFieldMapModel.find(mappingFilter);
      const fieldIds = mappings
        .map((mapping) => mapping.field_id)
        .filter((id): id is Types.ObjectId => Boolean(id));

      if (fieldIds.length) {
        fieldRecords = await this.fieldModel
          .find({
            _id: { $in: fieldIds },
            user_id: userObjectId,
            deleted_at: null,
          })
          .sort({ created_at: -1 });
      }
    } else {
      if (businessId && businessId !== 'default') {
        const businessContext = await this.resolveBusinessContext(userObjectId, businessId);
        if (!businessContext.valid) {
          return {
            message: businessContext.message,
            status: false,
            statusCode: businessContext.statusCode ?? 400,
          };
        }
      }

      fieldRecords = await this.fieldModel
        .find({
          user_id: userObjectId,
          deleted_at: null,
        })
        .sort({ created_at: -1 });
    }

    const mappingsByFieldId = await this.collectMappingsByField(
      userObjectId,
      fieldRecords.map((fieldRecord) => fieldRecord._id),
    );

    return {
      message: 'Fields retrieved successfully',
      status: true,
      statusCode: 200,
      data: fieldRecords.map((fieldRecord) =>
        this.toFieldResponse(fieldRecord, mappingsByFieldId.get(fieldRecord._id.toString()) ?? []),
      ),
    };
  }

  async findOne(userId: string, fieldId: string) {
    const userObjectId = new Types.ObjectId(userId);
    const fieldObjectId = this.parseObjectId(fieldId);
    if (!fieldObjectId) {
      return { message: 'Invalid field id', status: false, statusCode: 400 };
    }

    const fieldRecord = await this.fieldModel.findOne({
      _id: fieldObjectId,
      user_id: userObjectId,
      deleted_at: null,
    });
    if (!fieldRecord) {
      return { message: 'Field not found', status: false, statusCode: 404 };
    }

    const mappings = await this.findMappingsForField(userObjectId, fieldObjectId);
    return {
      message: 'Field retrieved successfully',
      status: true,
      statusCode: 200,
      data: this.toFieldResponse(fieldRecord, mappings),
    };
  }

  async updateField(userId: string, fieldId: string, payload: FieldPayload) {
    const userObjectId = new Types.ObjectId(userId);
    const fieldObjectId = this.parseObjectId(fieldId);
    if (!fieldObjectId) {
      return { message: 'Invalid field id', status: false, statusCode: 400 };
    }

    const existingField = await this.fieldModel.findOne({
      _id: fieldObjectId,
      user_id: userObjectId,
      deleted_at: null,
    });
    if (!existingField) {
      return { message: 'Field not found', status: false, statusCode: 404 };
    }

    const updateData = this.buildUpdatePayload(payload, existingField);
    if (!updateData.valid) {
      return {
        message: updateData.message,
        status: false,
        statusCode: 400,
      };
    }
    if (!updateData.update) {
      return {
        message: 'No valid fields provided for update',
        status: false,
        statusCode: 400,
      };
    }

    if (updateData.update.key) {
      const duplicate = await this.fieldModel.findOne({
        _id: { $ne: fieldObjectId },
        user_id: userObjectId,
        key: updateData.update.key,
        deleted_at: null,
      });
      if (duplicate) {
        return {
          message: 'Field key already exists for this user',
          status: false,
          statusCode: 409,
        };
      }
    }

    const updatedField = await this.fieldModel.findOneAndUpdate(
      {
        _id: fieldObjectId,
        user_id: userObjectId,
        deleted_at: null,
      },
      { $set: updateData.update },
      { returnDocument: 'after' },
    );

    const mappings = await this.findMappingsForField(userObjectId, fieldObjectId);
    return {
      message: 'Field updated successfully',
      status: true,
      statusCode: 200,
      data: this.toFieldResponse(updatedField, mappings),
    };
  }

  async deleteField(userId: string, fieldId: string) {
    const userObjectId = new Types.ObjectId(userId);
    const fieldObjectId = this.parseObjectId(fieldId);
    if (!fieldObjectId) {
      return { message: 'Invalid field id', status: false, statusCode: 400 };
    }

    const now = new Date();
    const deletedField = await this.fieldModel.findOneAndUpdate(
      {
        _id: fieldObjectId,
        user_id: userObjectId,
        deleted_at: null,
      },
      {
        $set: {
          status: 0,
          deleted_at: now,
        },
      },
      { returnDocument: 'after' },
    );

    if (!deletedField) {
      return { message: 'Field not found', status: false, statusCode: 404 };
    }

    await this.objectFieldMapModel.updateMany(
      {
        user_id: userObjectId,
        field_id: fieldObjectId,
        deleted_at: null,
      },
      {
        $set: {
          status: 0,
          deleted_at: now,
        },
      },
    );

    return {
      message: 'Field deleted successfully',
      status: true,
      statusCode: 200,
      data: null,
    };
  }

  private async validateCreatePayload(userId: Types.ObjectId, payload: FieldPayload) {
    const name = payload?.name?.trim();
    const keySource = payload?.key?.trim() || name;
    const key = this.normalizeKey(keySource);
    const type = this.parseFieldType(payload?.type) || 'text';
    const description = this.normalizeDescription(payload?.description);
    const isRequired = this.parseBoolean(payload?.is_required);
    const status = this.parseStatus(payload?.status);
    const options = this.normalizeOptions(payload?.options);
    const normalizedOptions = type === 'select' ? options : [];

    if (!name) {
      return {
        valid: false as const,
        message: 'Field name is required',
        statusCode: 400,
      };
    }
    if (!key) {
      return {
        valid: false as const,
        message: 'Field key is required',
        statusCode: 400,
      };
    }
    if (isRequired === null) {
      return {
        valid: false as const,
        message: 'is_required must be a valid boolean',
        statusCode: 400,
      };
    }
    if (status === null) {
      return {
        valid: false as const,
        message: 'Status must be a valid number',
        statusCode: 400,
      };
    }
    if (type === 'select' && !normalizedOptions.length) {
      return {
        valid: false as const,
        message: 'Select field type requires at least one option',
        statusCode: 400,
      };
    }

    const businessContext = await this.resolveBusinessContext(userId, payload?.business_id ?? null);
    if (!businessContext.valid) {
      return {
        valid: false as const,
        message: businessContext.message,
        statusCode: businessContext.statusCode ?? 400,
      };
    }

    const objectContext = await this.resolveObjectContext(
      userId,
      payload?.object_id ?? null,
      businessContext.business_id,
    );
    if (!objectContext.valid) {
      return {
        valid: false as const,
        message: objectContext.message ?? 'Invalid object',
        statusCode: objectContext.statusCode ?? 400,
      };
    }

    return {
      valid: true as const,
      name,
      key,
      type,
      description,
      is_required: isRequired ?? false,
      options: normalizedOptions,
      status: status ?? 1,
      object_id: objectContext.object_id,
      business_id: businessContext.business_id,
    };
  }

  private buildUpdatePayload(payload: FieldPayload, existingField: CrmFieldDocument) {
    const updateData: Record<string, any> = {};
    let nextType = existingField.type;
    let nextOptions = Array.isArray(existingField.options) ? existingField.options : [];

    if (typeof payload?.name === 'string' && payload.name.trim()) {
      updateData.name = payload.name.trim();
    }

    if (typeof payload?.key === 'string') {
      const key = this.normalizeKey(payload.key);
      if (!key) {
        return { valid: false as const, message: 'Field key is invalid' };
      }
      updateData.key = key;
    } else if (!payload?.key && typeof payload?.name === 'string' && payload.name.trim()) {
      updateData.key = this.normalizeKey(payload.name);
    }

    if (typeof payload?.type === 'string') {
      const type = this.parseFieldType(payload.type);
      if (!type) {
        return { valid: false as const, message: 'Field type is invalid' };
      }
      nextType = type;
      updateData.type = type;
    }

    if (typeof payload?.description === 'string' || payload?.description === null) {
      updateData.description = this.normalizeDescription(payload.description);
    }

    if (payload && Object.prototype.hasOwnProperty.call(payload, 'is_required')) {
      const isRequired = this.parseBoolean(payload?.is_required);
      if (isRequired === null) {
        return { valid: false as const, message: 'is_required must be a valid boolean' };
      }
      if (isRequired !== undefined) {
        updateData.is_required = isRequired;
      }
    }

    if (payload && Object.prototype.hasOwnProperty.call(payload, 'status')) {
      const status = this.parseStatus(payload?.status);
      if (status === null) {
        return { valid: false as const, message: 'Status must be a valid number' };
      }
      if (status !== undefined) {
        updateData.status = status;
      }
    }

    if (payload && Object.prototype.hasOwnProperty.call(payload, 'options')) {
      nextOptions = this.normalizeOptions(payload?.options);
      updateData.options = nextOptions;
    }

    if (nextType === 'select') {
      const effectiveOptions =
        payload && Object.prototype.hasOwnProperty.call(updateData, 'options') ? updateData.options : nextOptions;
      if (!effectiveOptions.length) {
        return { valid: false as const, message: 'Select field type requires at least one option' };
      }
    } else if (
      Object.prototype.hasOwnProperty.call(updateData, 'type') ||
      Object.prototype.hasOwnProperty.call(updateData, 'options')
    ) {
      updateData.options = [];
    }

    return {
      valid: true as const,
      update: Object.keys(updateData).length ? updateData : null,
    };
  }

  private async resolveBusinessContext(userId: Types.ObjectId, businessId?: string | null) {
    if (!businessId || businessId === 'default') {
      return { valid: true as const, business_id: null as Types.ObjectId | null };
    }

    const businessObjectId = this.parseObjectId(businessId);
    if (!businessObjectId) {
      return { valid: false as const, message: 'Invalid business id', statusCode: 400 };
    }

    const business = await this.businessModel.findOne({
      _id: businessObjectId,
      user_id: userId,
      deleted_at: null,
    });
    if (!business) {
      return { valid: false as const, message: 'Business not found', statusCode: 404 };
    }

    return { valid: true as const, business_id: businessObjectId };
  }

  private async resolveObjectContext(
    userId: Types.ObjectId,
    objectId?: string | null,
    businessId?: Types.ObjectId | null,
  ) {
    if (!objectId) {
      return { valid: true as const, object_id: null as Types.ObjectId | null };
    }

    const objectObjectId = this.parseObjectId(objectId);
    if (!objectObjectId) {
      return { valid: false as const, message: 'Invalid object id', statusCode: 400 };
    }

    const objectRecord = await this.objectModel.findOne({
      _id: objectObjectId,
      user_id: userId,
      deleted_at: null,
    });
    if (!objectRecord) {
      return { valid: false as const, message: 'Object not found', statusCode: 404 };
    }

    if (businessId) {
      const businessMap = await this.businessObjectMapModel.findOne({
        user_id: userId,
        business_id: businessId,
        object_id: objectObjectId,
        deleted_at: null,
      });

      if (!businessMap) {
        return {
          valid: false as const,
          message: 'Object is not mapped to the selected business',
          statusCode: 400,
        };
      }
    }

    return { valid: true as const, object_id: objectObjectId };
  }

  private async upsertObjectMapping(
    userId: Types.ObjectId,
    fieldId: Types.ObjectId,
    objectId: Types.ObjectId,
    businessId: Types.ObjectId | null,
  ) {
    await this.objectFieldMapModel.findOneAndUpdate(
      {
        user_id: userId,
        field_id: fieldId,
        object_id: objectId,
        business_id: businessId ?? null,
      },
      {
        $set: {
          status: 1,
          deleted_at: null,
        },
        $setOnInsert: {
          user_id: userId,
          field_id: fieldId,
          object_id: objectId,
          business_id: businessId ?? null,
        },
      },
      { upsert: true, returnDocument: 'after' },
    );
  }

  private async findMappingsForField(userId: Types.ObjectId, fieldId: Types.ObjectId) {
    const mappings = await this.objectFieldMapModel.find({
      user_id: userId,
      field_id: fieldId,
      deleted_at: null,
    });
    return this.normalizeMappingRecords(mappings);
  }

  private async collectMappingsByField(userId: Types.ObjectId, fieldIds: Types.ObjectId[]) {
    const mappingsByField = new Map<string, FieldMappingEntry[]>();
    if (!fieldIds.length) {
      return mappingsByField;
    }

    const mappings = await this.objectFieldMapModel.find({
      user_id: userId,
      field_id: { $in: fieldIds },
      deleted_at: null,
    });

    mappings.forEach((mapping) => {
      const fieldId = mapping.field_id?.toString?.();
      const objectId = mapping.object_id?.toString?.();
      if (!fieldId || !objectId) {
        return;
      }

      const existing = mappingsByField.get(fieldId) ?? [];
      const businessId = mapping.business_id?.toString?.() ?? null;
      if (!existing.some((entry) => entry.object_id === objectId && entry.business_id === businessId)) {
        existing.push({ object_id: objectId, business_id: businessId });
      }
      mappingsByField.set(fieldId, existing);
    });

    return mappingsByField;
  }

  private normalizeMappingRecords(mappings: ObjectFieldMapDocument[]): FieldMappingEntry[] {
    const normalized: FieldMappingEntry[] = [];
    mappings.forEach((mapping) => {
      const objectId = mapping.object_id?.toString?.();
      if (!objectId) {
        return;
      }

      const businessId = mapping.business_id?.toString?.() ?? null;
      if (!normalized.some((entry) => entry.object_id === objectId && entry.business_id === businessId)) {
        normalized.push({ object_id: objectId, business_id: businessId });
      }
    });
    return normalized;
  }

  private normalizeDescription(value: unknown): string | null {
    if (value === null || value === undefined) {
      return null;
    }

    const description = String(value).trim();
    return description ? description : null;
  }

  private normalizeOptions(value: unknown): string[] {
    const raw = Array.isArray(value)
      ? value
      : typeof value === 'string'
        ? value.split(/[\n,]/g)
        : [];

    const normalized = raw
      .map((option) => String(option).trim())
      .filter((option) => option.length > 0)
      .map((option) => option.slice(0, 120));

    const uniqueByValue = new Set<string>();
    const deduped: string[] = [];

    normalized.forEach((option) => {
      const normalizedKey = option.toLowerCase();
      if (!uniqueByValue.has(normalizedKey)) {
        uniqueByValue.add(normalizedKey);
        deduped.push(option);
      }
    });

    return deduped.slice(0, 50);
  }

  private normalizeKey(value: unknown): string {
    if (typeof value !== 'string') {
      return '';
    }

    return value
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '_')
      .replace(/^_+|_+$/g, '')
      .slice(0, 64);
  }

  private parseFieldType(value: unknown): FieldType | '' {
    if (typeof value !== 'string') {
      return '';
    }

    const normalized = value.trim().toLowerCase();
    if ((ALLOWED_FIELD_TYPES as readonly string[]).includes(normalized)) {
      return normalized as FieldType;
    }
    return '';
  }

  private parseBoolean(value: unknown): boolean | null | undefined {
    if (value === undefined) return undefined;
    if (value === null) return null;
    if (typeof value === 'boolean') return value;
    if (typeof value === 'number') {
      if (value === 1) return true;
      if (value === 0) return false;
      return null;
    }
    if (typeof value === 'string') {
      const normalized = value.trim().toLowerCase();
      if (['1', 'true', 'yes', 'y'].includes(normalized)) return true;
      if (['0', 'false', 'no', 'n'].includes(normalized)) return false;
      return null;
    }
    return null;
  }

  private parseStatus(value: unknown): number | null | undefined {
    if (value === undefined) return undefined;
    if (value === null) return null;

    const status = typeof value === 'number' ? value : Number(String(value).trim());
    if (!Number.isFinite(status)) return null;
    return Math.max(0, Math.trunc(status));
  }

  private parseObjectId(value: string): Types.ObjectId | null {
    if (!Types.ObjectId.isValid(value)) {
      return null;
    }
    return new Types.ObjectId(value);
  }

  private toFieldResponse(fieldRecord: CrmFieldDocument | null, mappings: FieldMappingEntry[]) {
    if (!fieldRecord) return null;

    const objectIds = Array.from(new Set(mappings.map((mapping) => mapping.object_id)));
    const businessIds = Array.from(
      new Set(mappings.map((mapping) => mapping.business_id).filter((businessId): businessId is string => Boolean(businessId))),
    );

    return {
      id: fieldRecord._id.toString(),
      user_id: fieldRecord.user_id?.toString?.() ?? null,
      name: fieldRecord.name,
      key: fieldRecord.key,
      type: fieldRecord.type,
      description: fieldRecord.description ?? null,
      is_required: Boolean(fieldRecord.is_required),
      options: Array.isArray(fieldRecord.options) ? fieldRecord.options : [],
      mapped_object_ids: objectIds,
      mapped_object_count: objectIds.length,
      mapped_business_ids: businessIds,
      mapped_business_count: businessIds.length,
      mapped_objects: mappings,
      status: fieldRecord.status,
      created_at: (fieldRecord as any).created_at ?? null,
      updated_at: (fieldRecord as any).updated_at ?? null,
    };
  }
}
