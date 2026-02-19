import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Business, BusinessDocument } from 'src/businesses/schemas/business.schema';
import {
  BusinessObjectMap,
  BusinessObjectMapDocument,
} from './schemas/business-object-map.schema';
import { CrmObject, CrmObjectDocument } from './schemas/object.schema';

interface ObjectPayload {
  name?: string;
  key?: string;
  description?: string | null;
  status?: number | string | null;
  business_id?: string | null;
}

interface BusinessMapPayload {
  business_id?: string | null;
}

@Injectable()
export class ObjectsService {
  constructor(
    @InjectModel(CrmObject.name)
    private readonly objectModel: Model<CrmObjectDocument>,
    @InjectModel(BusinessObjectMap.name)
    private readonly businessObjectMapModel: Model<BusinessObjectMapDocument>,
    @InjectModel(Business.name)
    private readonly businessModel: Model<BusinessDocument>,
  ) {}

  async createObject(userId: string, payload: ObjectPayload) {
    const userObjectId = new Types.ObjectId(userId);
    const validation = await this.validateCreatePayload(userObjectId, payload);
    if (!validation.valid) {
      return {
        message: validation.message,
        status: false,
        statusCode: validation.statusCode ?? 400,
      };
    }

    const duplicate = await this.objectModel.findOne({
      user_id: userObjectId,
      key: validation.key,
      deleted_at: null,
    });
    if (duplicate) {
      return {
        message: 'Object key already exists for this user',
        status: false,
        statusCode: 409,
      };
    }

    const objectRecord = await this.objectModel.create({
      user_id: userObjectId,
      name: validation.name,
      key: validation.key,
      description: validation.description,
      status: validation.status,
      deleted_at: null,
    });

    let mappedBusinessIds: string[] = [];
    if (validation.business_id) {
      await this.upsertBusinessMapping(userObjectId, objectRecord._id, validation.business_id);
      mappedBusinessIds = [validation.business_id.toString()];
    }

    return {
      message: 'Object created successfully',
      status: true,
      statusCode: 201,
      data: this.toObjectResponse(objectRecord, mappedBusinessIds),
    };
  }

  async mapObjectToBusiness(userId: string, objectId: string, payload: BusinessMapPayload) {
    const userObjectId = new Types.ObjectId(userId);
    const objectObjectId = this.parseObjectId(objectId);
    if (!objectObjectId) {
      return { message: 'Invalid object id', status: false, statusCode: 400 };
    }

    const businessContext = await this.resolveBusinessContext(userObjectId, payload?.business_id ?? null);
    if (!businessContext.valid || !businessContext.business_id) {
      const message = !businessContext.valid ? businessContext.message : 'Business id is required';
      const statusCode = !businessContext.valid ? businessContext.statusCode ?? 400 : 400;
      return {
        message,
        status: false,
        statusCode,
      };
    }

    const objectRecord = await this.objectModel.findOne({
      _id: objectObjectId,
      user_id: userObjectId,
      deleted_at: null,
    });
    if (!objectRecord) {
      return { message: 'Object not found', status: false, statusCode: 404 };
    }

    await this.upsertBusinessMapping(userObjectId, objectObjectId, businessContext.business_id);
    const mappedBusinessIds = await this.findMappedBusinessIdsForObject(userObjectId, objectObjectId);

    return {
      message: 'Object mapped to business successfully',
      status: true,
      statusCode: 200,
      data: this.toObjectResponse(objectRecord, mappedBusinessIds),
    };
  }

  async findAll(userId: string, businessId?: string | null, includeMapped: boolean = false) {
    const userObjectId = new Types.ObjectId(userId);
    const context = await this.resolveBusinessContext(userObjectId, businessId ?? null);
    if (!context.valid) {
      return {
        message: context.message,
        status: false,
        statusCode: context.statusCode ?? 400,
      };
    }

    let objectRecords: CrmObjectDocument[] = [];
    if (!context.business_id) {
      const findQuery: Record<string, any> = {
        user_id: userObjectId,
        deleted_at: null,
      };

      if (!includeMapped) {
        const mappedObjectIds = await this.businessObjectMapModel.distinct('object_id', {
          user_id: userObjectId,
          deleted_at: null,
        });
        if (mappedObjectIds.length) {
          findQuery._id = { $nin: mappedObjectIds };
        }
      }

      objectRecords = await this.objectModel
        .find(findQuery)
        .sort({ created_at: -1 });
    } else {
      const mappings = await this.businessObjectMapModel.find({
        user_id: userObjectId,
        business_id: context.business_id,
        deleted_at: null,
      });
      const mappedObjectIds = mappings
        .map((mapping) => mapping.object_id)
        .filter((objectId): objectId is Types.ObjectId => Boolean(objectId));

      if (mappedObjectIds.length) {
        objectRecords = await this.objectModel
          .find({
            _id: { $in: mappedObjectIds },
            user_id: userObjectId,
            deleted_at: null,
          })
          .sort({ created_at: -1 });
      }
    }

    const mappingsByObjectId = await this.collectBusinessMappings(
      userObjectId,
      objectRecords.map((item) => item._id),
    );

    return {
      message: 'Objects retrieved successfully',
      status: true,
      statusCode: 200,
      data: objectRecords.map((objectRecord) =>
        this.toObjectResponse(objectRecord, mappingsByObjectId.get(objectRecord._id.toString()) ?? []),
      ),
    };
  }

  async findOne(userId: string, objectId: string) {
    const userObjectId = new Types.ObjectId(userId);
    const objectObjectId = this.parseObjectId(objectId);
    if (!objectObjectId) {
      return { message: 'Invalid object id', status: false, statusCode: 400 };
    }

    const objectRecord = await this.objectModel.findOne({
      _id: objectObjectId,
      user_id: userObjectId,
      deleted_at: null,
    });
    if (!objectRecord) {
      return { message: 'Object not found', status: false, statusCode: 404 };
    }

    const mappedBusinessIds = await this.findMappedBusinessIdsForObject(userObjectId, objectObjectId);
    return {
      message: 'Object retrieved successfully',
      status: true,
      statusCode: 200,
      data: this.toObjectResponse(objectRecord, mappedBusinessIds),
    };
  }

  async updateObject(userId: string, objectId: string, payload: ObjectPayload) {
    const userObjectId = new Types.ObjectId(userId);
    const objectObjectId = this.parseObjectId(objectId);
    if (!objectObjectId) {
      return { message: 'Invalid object id', status: false, statusCode: 400 };
    }

    const existingObject = await this.objectModel.findOne({
      _id: objectObjectId,
      user_id: userObjectId,
      deleted_at: null,
    });
    if (!existingObject) {
      return { message: 'Object not found', status: false, statusCode: 404 };
    }

    const updateData = this.buildUpdatePayload(payload);
    if (!updateData.valid) {
      return { message: updateData.message, status: false, statusCode: 400 };
    }
    if (!updateData.update) {
      return { message: 'No valid fields provided for update', status: false, statusCode: 400 };
    }

    if (updateData.update.key) {
      const duplicate = await this.objectModel.findOne({
        _id: { $ne: objectObjectId },
        user_id: userObjectId,
        key: updateData.update.key,
        deleted_at: null,
      });
      if (duplicate) {
        return {
          message: 'Object key already exists for this user',
          status: false,
          statusCode: 409,
        };
      }
    }

    const updatedObject = await this.objectModel.findOneAndUpdate(
      {
        _id: objectObjectId,
        user_id: userObjectId,
        deleted_at: null,
      },
      { $set: updateData.update },
      { returnDocument: 'after' },
    );

    const mappedBusinessIds = await this.findMappedBusinessIdsForObject(userObjectId, objectObjectId);
    return {
      message: 'Object updated successfully',
      status: true,
      statusCode: 200,
      data: this.toObjectResponse(updatedObject, mappedBusinessIds),
    };
  }

  async deleteObject(userId: string, objectId: string) {
    const userObjectId = new Types.ObjectId(userId);
    const objectObjectId = this.parseObjectId(objectId);
    if (!objectObjectId) {
      return { message: 'Invalid object id', status: false, statusCode: 400 };
    }

    const now = new Date();
    const deletedObject = await this.objectModel.findOneAndUpdate(
      {
        _id: objectObjectId,
        user_id: userObjectId,
        deleted_at: null,
      },
      {
        $set: {
          deleted_at: now,
          status: 0,
        },
      },
      { returnDocument: 'after' },
    );

    if (!deletedObject) {
      return { message: 'Object not found', status: false, statusCode: 404 };
    }

    await this.businessObjectMapModel.updateMany(
      {
        user_id: userObjectId,
        object_id: objectObjectId,
        deleted_at: null,
      },
      {
        $set: {
          deleted_at: now,
          status: 0,
        },
      },
    );

    return {
      message: 'Object deleted successfully',
      status: true,
      statusCode: 200,
      data: null,
    };
  }

  private async validateCreatePayload(userId: Types.ObjectId, payload: ObjectPayload) {
    const name = payload?.name?.trim();
    const keySource = payload?.key?.trim() || name;
    const key = this.normalizeKey(keySource);
    const description = this.normalizeDescription(payload?.description);
    const status = this.parseStatus(payload?.status);
    const context = await this.resolveBusinessContext(userId, payload?.business_id ?? null);

    if (!name) {
      return { valid: false as const, message: 'Object name is required', statusCode: 400 };
    }
    if (!key) {
      return { valid: false as const, message: 'Object key is required', statusCode: 400 };
    }
    if (status === null) {
      return { valid: false as const, message: 'Status must be a valid number', statusCode: 400 };
    }
    if (!context.valid) {
      return { valid: false as const, message: context.message, statusCode: context.statusCode ?? 400 };
    }

    return {
      valid: true as const,
      name,
      key,
      description,
      status: status ?? 1,
      business_id: context.business_id,
    };
  }

  private buildUpdatePayload(payload: ObjectPayload) {
    const updateData: Record<string, any> = {};

    if (typeof payload?.name === 'string' && payload.name.trim()) {
      updateData.name = payload.name.trim();
    }

    if (typeof payload?.key === 'string') {
      const key = this.normalizeKey(payload.key);
      if (!key) {
        return { valid: false as const, message: 'Object key is invalid' };
      }
      updateData.key = key;
    } else if (!payload?.key && typeof payload?.name === 'string' && payload.name.trim()) {
      updateData.key = this.normalizeKey(payload.name);
    }

    if (typeof payload?.description === 'string' || payload?.description === null) {
      updateData.description = this.normalizeDescription(payload.description);
    }

    if (payload && Object.prototype.hasOwnProperty.call(payload, 'status')) {
      const status = this.parseStatus(payload?.status);
      if (status === null) {
        return { valid: false as const, message: 'Status must be a valid number' };
      }
      updateData.status = status;
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

  private async upsertBusinessMapping(userId: Types.ObjectId, objectId: Types.ObjectId, businessId: Types.ObjectId) {
    await this.businessObjectMapModel.findOneAndUpdate(
      {
        user_id: userId,
        object_id: objectId,
        business_id: businessId,
      },
      {
        $set: {
          status: 1,
          deleted_at: null,
        },
        $setOnInsert: {
          user_id: userId,
          object_id: objectId,
          business_id: businessId,
        },
      },
      { upsert: true, returnDocument: 'after' },
    );
  }

  private async findMappedBusinessIdsForObject(userId: Types.ObjectId, objectId: Types.ObjectId) {
    const mappings = await this.businessObjectMapModel.find({
      user_id: userId,
      object_id: objectId,
      deleted_at: null,
    });

    return mappings
      .map((mapping) => mapping.business_id?.toString?.())
      .filter((value): value is string => Boolean(value));
  }

  private async collectBusinessMappings(userId: Types.ObjectId, objectIds: Types.ObjectId[]) {
    const mappingByObjectId = new Map<string, string[]>();
    if (!objectIds.length) {
      return mappingByObjectId;
    }

    const mappings = await this.businessObjectMapModel.find({
      user_id: userId,
      object_id: { $in: objectIds },
      deleted_at: null,
    });

    mappings.forEach((mapping) => {
      const objectId = mapping.object_id?.toString?.();
      const businessId = mapping.business_id?.toString?.();
      if (!objectId || !businessId) {
        return;
      }

      const existing = mappingByObjectId.get(objectId) ?? [];
      if (!existing.includes(businessId)) {
        existing.push(businessId);
      }
      mappingByObjectId.set(objectId, existing);
    });

    return mappingByObjectId;
  }

  private normalizeDescription(value: unknown): string | null {
    if (value === null || value === undefined) {
      return null;
    }

    const description = String(value).trim();
    return description ? description : null;
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

  private toObjectResponse(objectRecord: CrmObjectDocument | null, mappedBusinessIds: string[]) {
    if (!objectRecord) return null;

    return {
      id: objectRecord._id.toString(),
      user_id: objectRecord.user_id?.toString?.() ?? null,
      name: objectRecord.name,
      key: objectRecord.key,
      description: objectRecord.description ?? null,
      mapped_business_ids: mappedBusinessIds,
      mapped_business_count: mappedBusinessIds.length,
      status: objectRecord.status,
      created_at: (objectRecord as any).created_at ?? null,
      updated_at: (objectRecord as any).updated_at ?? null,
    };
  }
}
