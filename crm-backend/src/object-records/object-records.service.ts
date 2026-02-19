import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Business, BusinessDocument } from 'src/businesses/schemas/business.schema';
import { CrmField, CrmFieldDocument } from 'src/fields/schemas/field.schema';
import {
  ObjectFieldMap,
  ObjectFieldMapDocument,
} from 'src/fields/schemas/object-field-map.schema';
import {
  BusinessObjectMap,
  BusinessObjectMapDocument,
} from 'src/objects/schemas/business-object-map.schema';
import { CrmObject, CrmObjectDocument } from 'src/objects/schemas/object.schema';
import { ObjectListView, ObjectListViewDocument } from './schemas/object-list-view.schema';
import { ObjectRecord, ObjectRecordDocument } from './schemas/object-record.schema';

const TRUE_LIKE = ['1', 'true', 'yes', 'y'];
const FALSE_LIKE = ['0', 'false', 'no', 'n'];
const PAGE_SIZE_DEFAULT = 10;
const PAGE_SIZE_MAX = 100;

type SortDirection = 'asc' | 'desc';

interface ListRecordsQuery {
  business_id?: string | null;
  search?: string | null;
  page?: string | number | null;
  limit?: string | number | null;
  sort_field?: string | null;
  sort_direction?: string | null;
}

interface CreateRecordPayload {
  business_id?: string | null;
  values?: Record<string, unknown> | null;
}

interface ListViewsQuery {
  business_id?: string | null;
}

interface CreateListViewPayload {
  business_id?: string | null;
  name?: string | null;
  visible_field_ids?: unknown;
}

interface UpdateListViewPayload {
  business_id?: string | null;
  name?: string | null;
  visible_field_ids?: unknown;
  is_default?: unknown;
}

interface RecordFieldDefinition {
  id: string;
  name: string;
  key: string;
  type: string;
  is_required: boolean;
  options: string[];
  status: number;
}

interface RecordItemResponse {
  id: string;
  object_id: string;
  business_id: string | null;
  values: Record<string, unknown>;
  status: number;
  created_at: string | null;
  updated_at: string | null;
}

interface GridContext {
  object_id: Types.ObjectId;
  business_id: Types.ObjectId | null;
  object_record: CrmObjectDocument;
}

interface GridData {
  context: GridContext;
  fields: RecordFieldDefinition[];
  items: RecordItemResponse[];
  sort_field: string;
  sort_direction: SortDirection;
  search: string;
}

interface ListViewItemResponse {
  id: string;
  object_id: string;
  business_id: string | null;
  name: string;
  visible_field_ids: string[];
  is_default: boolean;
  status: number;
  created_at: string | null;
  updated_at: string | null;
}

@Injectable()
export class ObjectRecordsService {
  constructor(
    @InjectModel(ObjectRecord.name)
    private readonly objectRecordModel: Model<ObjectRecordDocument>,
    @InjectModel(ObjectListView.name)
    private readonly objectListViewModel: Model<ObjectListViewDocument>,
    @InjectModel(CrmObject.name)
    private readonly objectModel: Model<CrmObjectDocument>,
    @InjectModel(Business.name)
    private readonly businessModel: Model<BusinessDocument>,
    @InjectModel(BusinessObjectMap.name)
    private readonly businessObjectMapModel: Model<BusinessObjectMapDocument>,
    @InjectModel(ObjectFieldMap.name)
    private readonly objectFieldMapModel: Model<ObjectFieldMapDocument>,
    @InjectModel(CrmField.name)
    private readonly fieldModel: Model<CrmFieldDocument>,
  ) {}

  async listRecords(userId: string, objectId: string, query: ListRecordsQuery) {
    const userObjectId = new Types.ObjectId(userId);
    const gridResult = await this.buildGrid(userObjectId, objectId, query);
    if (!gridResult.valid) {
      return {
        message: gridResult.message,
        status: false,
        statusCode: gridResult.statusCode ?? 400,
      };
    }

    const page = this.parsePositiveInteger(query?.page, 1);
    const limit = this.parsePositiveInteger(query?.limit, PAGE_SIZE_DEFAULT, PAGE_SIZE_MAX);
    const total = gridResult.grid.items.length;
    const totalPages = total === 0 ? 1 : Math.ceil(total / limit);
    const currentPage = Math.min(Math.max(page, 1), totalPages);
    const start = (currentPage - 1) * limit;
    const end = start + limit;

    return {
      message: 'Object records retrieved successfully',
      status: true,
      statusCode: 200,
      data: {
        object_id: gridResult.grid.context.object_id.toString(),
        business_id: gridResult.grid.context.business_id?.toString?.() ?? null,
        fields: gridResult.grid.fields,
        items: gridResult.grid.items.slice(start, end),
        pagination: {
          page: currentPage,
          limit,
          total,
          total_pages: totalPages,
          has_prev: currentPage > 1,
          has_next: currentPage < totalPages,
        },
        sort: {
          field: gridResult.grid.sort_field,
          direction: gridResult.grid.sort_direction,
        },
        search: gridResult.grid.search,
      },
    };
  }

  async createRecord(userId: string, objectId: string, payload: CreateRecordPayload) {
    const userObjectId = new Types.ObjectId(userId);
    const context = await this.resolveContext(userObjectId, objectId, payload?.business_id ?? null);
    if (!context.valid || !context.context) {
      return {
        message: context.message,
        status: false,
        statusCode: context.statusCode ?? 400,
      };
    }

    const fieldsContext = await this.resolveMappedFields(
      userObjectId,
      context.context.object_id,
      context.context.business_id,
    );
    if (!fieldsContext.fields.length) {
      return {
        message: 'Add at least one active mapped field before creating records',
        status: false,
        statusCode: 400,
      };
    }

    const values = payload?.values;
    if (!values || Array.isArray(values) || typeof values !== 'object') {
      return {
        message: 'Record values are required',
        status: false,
        statusCode: 400,
      };
    }

    const normalizedValues = this.normalizeValues(values, fieldsContext.fields);
    if (!normalizedValues.valid || !normalizedValues.values) {
      return {
        message: normalizedValues.message,
        status: false,
        statusCode: 400,
      };
    }

    const created = await this.objectRecordModel.create({
      user_id: userObjectId,
      object_id: context.context.object_id,
      business_id: context.context.business_id,
      values: normalizedValues.values,
      status: 1,
      deleted_at: null,
    });

    return {
      message: 'Object record created successfully',
      status: true,
      statusCode: 201,
      data: {
        record: this.toRecordResponse(created, fieldsContext.fields),
      },
    };
  }

  async listViews(userId: string, objectId: string, query: ListViewsQuery) {
    const userObjectId = new Types.ObjectId(userId);
    const contextResult = await this.resolveContext(userObjectId, objectId, query?.business_id ?? null);
    if (!contextResult.valid || !contextResult.context) {
      return {
        message: contextResult.message,
        status: false,
        statusCode: contextResult.statusCode ?? 400,
      };
    }

    const fieldsContext = await this.resolveMappedFields(
      userObjectId,
      contextResult.context.object_id,
      contextResult.context.business_id,
    );

    let views = await this.objectListViewModel
      .find({
        user_id: userObjectId,
        object_id: contextResult.context.object_id,
        business_id: contextResult.context.business_id ?? null,
        deleted_at: null,
        status: 1,
      })
      .sort({ created_at: 1 });

    if (!views.length && fieldsContext.fields.length) {
      const createdView = await this.objectListViewModel.create({
        user_id: userObjectId,
        object_id: contextResult.context.object_id,
        business_id: contextResult.context.business_id ?? null,
        name: 'View 1',
        visible_field_ids: fieldsContext.fields.map((field) => new Types.ObjectId(field.id)),
        is_default: true,
        status: 1,
        deleted_at: null,
      });
      views = [createdView];
    }

    let defaultViewId = views.find((view) => Boolean(view.is_default))?._id?.toString?.() ?? null;
    if (!defaultViewId && views.length) {
      defaultViewId = views[0]._id.toString();
      await this.objectListViewModel.updateOne(
        {
          _id: views[0]._id,
          user_id: userObjectId,
          deleted_at: null,
        },
        {
          $set: {
            is_default: true,
          },
        },
      );
    }

    const allowedFieldIds = fieldsContext.fields.map((field) => field.id);

    return {
      message: 'Object list views retrieved successfully',
      status: true,
      statusCode: 200,
      data: {
        object_id: contextResult.context.object_id.toString(),
        business_id: contextResult.context.business_id?.toString?.() ?? null,
        default_view_id: defaultViewId,
        items: views.map((view) => this.toListViewResponse(view, allowedFieldIds, defaultViewId)),
      },
    };
  }

  async createView(userId: string, objectId: string, payload: CreateListViewPayload) {
    const userObjectId = new Types.ObjectId(userId);
    const contextResult = await this.resolveContext(userObjectId, objectId, payload?.business_id ?? null);
    if (!contextResult.valid || !contextResult.context) {
      return {
        message: contextResult.message,
        status: false,
        statusCode: contextResult.statusCode ?? 400,
      };
    }

    const fieldsContext = await this.resolveMappedFields(
      userObjectId,
      contextResult.context.object_id,
      contextResult.context.business_id,
    );
    if (!fieldsContext.fields.length) {
      return {
        message: 'Add at least one mapped field before creating list views',
        status: false,
        statusCode: 400,
      };
    }

    const existingViews = await this.objectListViewModel
      .find({
        user_id: userObjectId,
        object_id: contextResult.context.object_id,
        business_id: contextResult.context.business_id ?? null,
        deleted_at: null,
        status: 1,
      })
      .sort({ created_at: 1 });

    const hasVisibleFieldIdsPayload = this.hasOwn(payload, 'visible_field_ids');
    const visibleFieldIds = this.sanitizeVisibleFieldIds(
      payload?.visible_field_ids,
      fieldsContext.fields,
      !hasVisibleFieldIdsPayload,
    );
    if (!visibleFieldIds.length) {
      return {
        message: 'Select at least one visible field for the list view',
        status: false,
        statusCode: 400,
      };
    }

    const requestedName = this.normalizeListViewName(payload?.name);
    const name = requestedName || this.generateNextViewName(existingViews.map((view) => view.name));

    if (requestedName) {
      const duplicateName = existingViews.find(
        (view) => view.name.trim().toLowerCase() === requestedName.toLowerCase(),
      );
      if (duplicateName) {
        return {
          message: 'List view name already exists for this object',
          status: false,
          statusCode: 409,
        };
      }
    }

    const isDefault = existingViews.length === 0;

    const createdView = await this.objectListViewModel.create({
      user_id: userObjectId,
      object_id: contextResult.context.object_id,
      business_id: contextResult.context.business_id ?? null,
      name,
      visible_field_ids: visibleFieldIds.map((fieldId) => new Types.ObjectId(fieldId)),
      is_default: isDefault,
      status: 1,
      deleted_at: null,
    });

    const allowedFieldIds = fieldsContext.fields.map((field) => field.id);

    return {
      message: 'Object list view created successfully',
      status: true,
      statusCode: 201,
      data: {
        view: this.toListViewResponse(createdView, allowedFieldIds, isDefault ? createdView._id.toString() : null),
      },
    };
  }

  async updateView(userId: string, objectId: string, viewId: string, payload: UpdateListViewPayload) {
    const userObjectId = new Types.ObjectId(userId);
    const contextResult = await this.resolveContext(userObjectId, objectId, payload?.business_id ?? null);
    if (!contextResult.valid || !contextResult.context) {
      return {
        message: contextResult.message,
        status: false,
        statusCode: contextResult.statusCode ?? 400,
      };
    }

    const viewObjectId = this.parseObjectId(viewId);
    if (!viewObjectId) {
      return {
        message: 'Invalid list view id',
        status: false,
        statusCode: 400,
      };
    }

    const existingView = await this.objectListViewModel.findOne({
      _id: viewObjectId,
      user_id: userObjectId,
      object_id: contextResult.context.object_id,
      business_id: contextResult.context.business_id ?? null,
      deleted_at: null,
      status: 1,
    });
    if (!existingView) {
      return {
        message: 'List view not found',
        status: false,
        statusCode: 404,
      };
    }

    const fieldsContext = await this.resolveMappedFields(
      userObjectId,
      contextResult.context.object_id,
      contextResult.context.business_id,
    );

    const updatePayload: Record<string, unknown> = {};

    if (this.hasOwn(payload, 'name')) {
      const normalizedName = this.normalizeListViewName(payload?.name);
      if (!normalizedName) {
        return {
          message: 'List view name is required',
          status: false,
          statusCode: 400,
        };
      }

      const duplicateName = await this.objectListViewModel.findOne({
        _id: { $ne: viewObjectId },
        user_id: userObjectId,
        object_id: contextResult.context.object_id,
        business_id: contextResult.context.business_id ?? null,
        deleted_at: null,
        status: 1,
        name: {
          $regex: new RegExp(`^${this.escapeRegExp(normalizedName)}$`, 'i'),
        },
      });
      if (duplicateName) {
        return {
          message: 'List view name already exists for this object',
          status: false,
          statusCode: 409,
        };
      }

      updatePayload.name = normalizedName;
    }

    if (this.hasOwn(payload, 'visible_field_ids')) {
      const visibleFieldIds = this.sanitizeVisibleFieldIds(
        payload?.visible_field_ids,
        fieldsContext.fields,
        false,
      );
      if (!visibleFieldIds.length) {
        return {
          message: 'Select at least one visible field for the list view',
          status: false,
          statusCode: 400,
        };
      }

      updatePayload.visible_field_ids = visibleFieldIds.map((fieldId) => new Types.ObjectId(fieldId));
    }

    if (this.hasOwn(payload, 'is_default')) {
      const parsedIsDefault = this.parseBoolean(payload?.is_default);
      if (parsedIsDefault === null || parsedIsDefault === undefined) {
        return {
          message: 'is_default must be true or false',
          status: false,
          statusCode: 400,
        };
      }

      if (!parsedIsDefault) {
        return {
          message: 'Select another list view as default instead of unsetting this one directly',
          status: false,
          statusCode: 400,
        };
      }

      updatePayload.is_default = true;

      await this.objectListViewModel.updateMany(
        {
          user_id: userObjectId,
          object_id: contextResult.context.object_id,
          business_id: contextResult.context.business_id ?? null,
          deleted_at: null,
          _id: { $ne: viewObjectId },
        },
        {
          $set: {
            is_default: false,
          },
        },
      );
    }

    if (!Object.keys(updatePayload).length) {
      const allowedFieldIds = fieldsContext.fields.map((field) => field.id);
      return {
        message: 'List view retrieved successfully',
        status: true,
        statusCode: 200,
        data: {
          view: this.toListViewResponse(existingView, allowedFieldIds),
        },
      };
    }

    const updatedView = await this.objectListViewModel.findOneAndUpdate(
      {
        _id: viewObjectId,
        user_id: userObjectId,
        object_id: contextResult.context.object_id,
        business_id: contextResult.context.business_id ?? null,
        deleted_at: null,
        status: 1,
      },
      {
        $set: updatePayload,
      },
      { returnDocument: 'after' },
    );

    if (!updatedView) {
      return {
        message: 'List view not found',
        status: false,
        statusCode: 404,
      };
    }

    const allowedFieldIds = fieldsContext.fields.map((field) => field.id);

    return {
      message: 'Object list view updated successfully',
      status: true,
      statusCode: 200,
      data: {
        view: this.toListViewResponse(updatedView, allowedFieldIds),
      },
    };
  }

  async exportRecords(userId: string, objectId: string, query: ListRecordsQuery) {
    const userObjectId = new Types.ObjectId(userId);
    const gridResult = await this.buildGrid(userObjectId, objectId, query);
    if (!gridResult.valid) {
      return {
        message: gridResult.message,
        status: false,
        statusCode: gridResult.statusCode ?? 400,
      };
    }

    const csv = this.buildCsv(gridResult.grid.fields, gridResult.grid.items);
    const objectKey = this.normalizeExportName(gridResult.grid.context.object_record.key || 'object');
    const datePart = new Date().toISOString().slice(0, 10);

    return {
      message: 'Object records exported successfully',
      status: true,
      statusCode: 200,
      data: {
        file_name: `${objectKey}_records_${datePart}.csv`,
        mime_type: 'text/csv;charset=utf-8',
        content: csv,
        total_records: gridResult.grid.items.length,
      },
    };
  }

  private async buildGrid(
    userId: Types.ObjectId,
    objectId: string,
    query: ListRecordsQuery,
  ): Promise<{ valid: true; grid: GridData } | { valid: false; message: string; statusCode: number }> {
    const contextResult = await this.resolveContext(userId, objectId, query?.business_id ?? null);
    if (!contextResult.valid || !contextResult.context) {
      return {
        valid: false,
        message: contextResult.message,
        statusCode: contextResult.statusCode ?? 400,
      };
    }

    const fieldsContext = await this.resolveMappedFields(
      userId,
      contextResult.context.object_id,
      contextResult.context.business_id,
    );

    const records = await this.objectRecordModel
      .find({
        user_id: userId,
        object_id: contextResult.context.object_id,
        business_id: contextResult.context.business_id ?? null,
        deleted_at: null,
      })
      .sort({ created_at: -1 });

    const searchTerm = String(query?.search || '').trim().toLowerCase();
    const sortDirection = this.parseSortDirection(query?.sort_direction);
    const sortField = this.resolveSortField(query?.sort_field, fieldsContext.fields);

    let items = records.map((record) => this.toRecordResponse(record, fieldsContext.fields));

    if (searchTerm) {
      items = items.filter((item) => this.matchesSearch(item, fieldsContext.fields, searchTerm));
    }

    items.sort((left, right) =>
      this.compareItems(left, right, sortField, sortDirection, fieldsContext.fields),
    );

    return {
      valid: true,
      grid: {
        context: contextResult.context,
        fields: fieldsContext.fields,
        items,
        sort_field: sortField,
        sort_direction: sortDirection,
        search: searchTerm,
      },
    };
  }

  private async resolveContext(userId: Types.ObjectId, objectId: string, businessId: string | null) {
    const objectObjectId = this.parseObjectId(objectId);
    if (!objectObjectId) {
      return { valid: false as const, message: 'Invalid object id', statusCode: 400 };
    }

    const businessContext = await this.resolveBusinessContext(userId, businessId ?? null);
    if (!businessContext.valid) {
      return {
        valid: false as const,
        message: businessContext.message,
        statusCode: businessContext.statusCode ?? 400,
      };
    }

    const objectRecord = await this.objectModel.findOne({
      _id: objectObjectId,
      user_id: userId,
      deleted_at: null,
    });
    if (!objectRecord) {
      return { valid: false as const, message: 'Object not found', statusCode: 404 };
    }

    if (businessContext.business_id) {
      const businessMap = await this.businessObjectMapModel.findOne({
        user_id: userId,
        business_id: businessContext.business_id,
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

    return {
      valid: true as const,
      context: {
        object_id: objectObjectId,
        business_id: businessContext.business_id,
        object_record: objectRecord,
      },
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

  private async resolveMappedFields(
    userId: Types.ObjectId,
    objectId: Types.ObjectId,
    businessId: Types.ObjectId | null,
  ) {
    const mappingFilter: Record<string, any> = {
      user_id: userId,
      object_id: objectId,
      deleted_at: null,
    };

    if (businessId) {
      mappingFilter.$or = [{ business_id: businessId }, { business_id: null }];
    } else {
      mappingFilter.business_id = null;
    }

    const mappings = await this.objectFieldMapModel.find(mappingFilter).sort({ created_at: 1 });
    const orderedFieldIds: string[] = [];
    mappings.forEach((mapping) => {
      const fieldId = mapping.field_id?.toString?.();
      if (!fieldId) {
        return;
      }
      if (!orderedFieldIds.includes(fieldId)) {
        orderedFieldIds.push(fieldId);
      }
    });

    if (!orderedFieldIds.length) {
      return { valid: true as const, fields: [] as RecordFieldDefinition[] };
    }

    const fieldRecords = await this.fieldModel.find({
      _id: { $in: orderedFieldIds.map((fieldId) => new Types.ObjectId(fieldId)) },
      user_id: userId,
      deleted_at: null,
      status: 1,
    });

    const fieldById = new Map<string, CrmFieldDocument>();
    fieldRecords.forEach((fieldRecord) => {
      fieldById.set(fieldRecord._id.toString(), fieldRecord);
    });

    const fields = orderedFieldIds
      .map((fieldId) => {
        const fieldRecord = fieldById.get(fieldId);
        if (!fieldRecord) {
          return null;
        }

        return {
          id: fieldRecord._id.toString(),
          name: fieldRecord.name,
          key: fieldRecord.key,
          type: fieldRecord.type,
          is_required: Boolean(fieldRecord.is_required),
          options: Array.isArray(fieldRecord.options) ? fieldRecord.options : [],
          status: Number(fieldRecord.status),
        } as RecordFieldDefinition;
      })
      .filter((field): field is RecordFieldDefinition => Boolean(field));

    return {
      valid: true as const,
      fields,
    };
  }

  private normalizeValues(values: Record<string, unknown>, fields: RecordFieldDefinition[]) {
    const normalized: Record<string, unknown> = {};
    const hasOwn = (key: string) => Object.prototype.hasOwnProperty.call(values, key);

    for (const field of fields) {
      const hasIdValue = hasOwn(field.id);
      const hasKeyValue = hasOwn(field.key);
      const rawValue = hasIdValue ? values[field.id] : hasKeyValue ? values[field.key] : undefined;

      const valueResult = this.normalizeFieldValue(field, rawValue);
      if (!valueResult.valid) {
        return {
          valid: false as const,
          message: `${field.name}: ${valueResult.message}`,
        };
      }

      if (valueResult.missing) {
        if (field.is_required) {
          return {
            valid: false as const,
            message: `${field.name} is required`,
          };
        }
        continue;
      }

      normalized[field.id] = valueResult.value;
    }

    if (!Object.keys(normalized).length) {
      return {
        valid: false as const,
        message: 'Provide at least one field value',
      };
    }

    return {
      valid: true as const,
      values: normalized,
    };
  }

  private normalizeFieldValue(field: RecordFieldDefinition, value: unknown) {
    if (value === undefined || value === null) {
      return { valid: true as const, missing: true as const };
    }

    const fieldType = String(field.type || '').trim().toLowerCase();

    if (typeof value === 'string' && !value.trim()) {
      return { valid: true as const, missing: true as const };
    }

    switch (fieldType) {
      case 'number': {
        const parsed = typeof value === 'number' ? value : Number(String(value).trim());
        if (!Number.isFinite(parsed)) {
          return { valid: false as const, message: 'must be a valid number' };
        }
        return { valid: true as const, missing: false as const, value: parsed };
      }
      case 'boolean': {
        const parsed = this.parseBoolean(value);
        if (parsed === null || parsed === undefined) {
          return { valid: false as const, message: 'must be true or false' };
        }
        return { valid: true as const, missing: false as const, value: parsed };
      }
      case 'date': {
        const parsed = this.normalizeDateOnly(value);
        if (!parsed) {
          return { valid: false as const, message: 'must be a valid date' };
        }
        return { valid: true as const, missing: false as const, value: parsed };
      }
      case 'datetime': {
        const parsed = this.normalizeDateTime(value);
        if (!parsed) {
          return { valid: false as const, message: 'must be a valid date time' };
        }
        return { valid: true as const, missing: false as const, value: parsed };
      }
      case 'select': {
        const normalized = String(value).trim();
        if (!normalized) {
          return { valid: true as const, missing: true as const };
        }

        const optionMatch = field.options.find(
          (option) => option.toLowerCase() === normalized.toLowerCase(),
        );
        if (!optionMatch) {
          return { valid: false as const, message: 'must match one of the configured options' };
        }

        return { valid: true as const, missing: false as const, value: optionMatch };
      }
      default: {
        const normalized = String(value).trim();
        if (!normalized) {
          return { valid: true as const, missing: true as const };
        }
        return { valid: true as const, missing: false as const, value: normalized };
      }
    }
  }

  private toRecordResponse(
    record: ObjectRecordDocument,
    fields: RecordFieldDefinition[],
  ): RecordItemResponse {
    const rawValues = this.toPlainObject(record.values);
    const values: Record<string, unknown> = {};

    fields.forEach((field) => {
      values[field.id] = Object.prototype.hasOwnProperty.call(rawValues, field.id)
        ? rawValues[field.id]
        : null;
    });

    return {
      id: record._id.toString(),
      object_id: record.object_id?.toString?.() ?? '',
      business_id: record.business_id?.toString?.() ?? null,
      values,
      status: Number(record.status ?? 1),
      created_at: (record as any).created_at ?? null,
      updated_at: (record as any).updated_at ?? null,
    };
  }

  private matchesSearch(
    item: RecordItemResponse,
    fields: RecordFieldDefinition[],
    searchTerm: string,
  ): boolean {
    if (!searchTerm) {
      return true;
    }

    if (item.id.toLowerCase().includes(searchTerm)) {
      return true;
    }

    const createdText = String(item.created_at || '').toLowerCase();
    if (createdText.includes(searchTerm)) {
      return true;
    }

    return fields.some((field) =>
      this.stringifyValue(item.values[field.id], field.type)
        .toLowerCase()
        .includes(searchTerm),
    );
  }

  private compareItems(
    left: RecordItemResponse,
    right: RecordItemResponse,
    sortField: string,
    sortDirection: SortDirection,
    fields: RecordFieldDefinition[],
  ): number {
    const directionFactor = sortDirection === 'asc' ? 1 : -1;

    if (sortField === 'created_at' || sortField === 'updated_at') {
      const leftTime = this.toTimestamp((left as any)[sortField]);
      const rightTime = this.toTimestamp((right as any)[sortField]);
      return (leftTime - rightTime) * directionFactor;
    }

    const field = fields.find((item) => item.id === sortField || item.key === sortField);
    if (!field) {
      const leftTime = this.toTimestamp(left.created_at);
      const rightTime = this.toTimestamp(right.created_at);
      return (leftTime - rightTime) * -1;
    }

    const leftValue = left.values[field.id];
    const rightValue = right.values[field.id];
    const compared = this.compareFieldValues(leftValue, rightValue, field.type);
    return compared * directionFactor;
  }

  private compareFieldValues(leftValue: unknown, rightValue: unknown, fieldType: string): number {
    const leftNormalized = this.normalizeComparable(leftValue, fieldType);
    const rightNormalized = this.normalizeComparable(rightValue, fieldType);

    if (leftNormalized === null && rightNormalized === null) {
      return 0;
    }
    if (leftNormalized === null) {
      return 1;
    }
    if (rightNormalized === null) {
      return -1;
    }

    if (typeof leftNormalized === 'number' && typeof rightNormalized === 'number') {
      return leftNormalized - rightNormalized;
    }

    if (typeof leftNormalized === 'boolean' && typeof rightNormalized === 'boolean') {
      return Number(leftNormalized) - Number(rightNormalized);
    }

    return String(leftNormalized).localeCompare(String(rightNormalized), 'en', {
      sensitivity: 'base',
      numeric: true,
    });
  }

  private normalizeComparable(value: unknown, fieldType: string): number | string | boolean | null {
    if (value === undefined || value === null) {
      return null;
    }

    const normalizedType = String(fieldType || '').trim().toLowerCase();

    if (normalizedType === 'number') {
      const parsed = typeof value === 'number' ? value : Number(String(value));
      return Number.isFinite(parsed) ? parsed : null;
    }

    if (normalizedType === 'boolean') {
      const parsed = this.parseBoolean(value);
      if (parsed === null || parsed === undefined) {
        return null;
      }
      return parsed;
    }

    if (normalizedType === 'date' || normalizedType === 'datetime') {
      const timestamp = this.toTimestamp(value);
      return Number.isFinite(timestamp) ? timestamp : null;
    }

    const text = String(value).trim();
    return text ? text.toLowerCase() : null;
  }

  private resolveSortField(sortField: string | null | undefined, fields: RecordFieldDefinition[]): string {
    const normalized = String(sortField || '').trim();
    if (!normalized) {
      return 'created_at';
    }

    if (normalized === 'created_at' || normalized === 'updated_at') {
      return normalized;
    }

    const matched = fields.find((field) => field.id === normalized || field.key === normalized);
    return matched?.id ?? 'created_at';
  }

  private parseSortDirection(value: string | null | undefined): SortDirection {
    const normalized = String(value || '')
      .trim()
      .toLowerCase();
    return normalized === 'asc' ? 'asc' : 'desc';
  }

  private parsePositiveInteger(value: unknown, fallback: number, max?: number): number {
    const parsed = typeof value === 'number' ? value : Number(String(value ?? '').trim());
    if (!Number.isFinite(parsed) || parsed < 1) {
      return fallback;
    }

    const normalized = Math.trunc(parsed);
    if (max && normalized > max) {
      return max;
    }
    return normalized;
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

    const normalized = String(value).trim().toLowerCase();
    if (TRUE_LIKE.includes(normalized)) {
      return true;
    }
    if (FALSE_LIKE.includes(normalized)) {
      return false;
    }
    return null;
  }

  private normalizeDateOnly(value: unknown): string {
    const raw = String(value || '').trim();
    if (!raw) {
      return '';
    }

    if (/^\d{4}-\d{2}-\d{2}$/.test(raw)) {
      return raw;
    }

    const parsed = new Date(raw);
    if (Number.isNaN(parsed.getTime())) {
      return '';
    }

    return parsed.toISOString().slice(0, 10);
  }

  private normalizeDateTime(value: unknown): string {
    const raw = String(value || '').trim();
    if (!raw) {
      return '';
    }

    const parsed = new Date(raw);
    if (Number.isNaN(parsed.getTime())) {
      return '';
    }

    return parsed.toISOString();
  }

  private toTimestamp(value: unknown): number {
    if (!value) {
      return 0;
    }

    const parsed = new Date(String(value));
    if (Number.isNaN(parsed.getTime())) {
      return 0;
    }

    return parsed.getTime();
  }

  private toPlainObject(value: unknown): Record<string, unknown> {
    if (!value || typeof value !== 'object') {
      return {};
    }

    if (value instanceof Map) {
      return Object.fromEntries(value.entries());
    }

    if (this.isPlainObject(value)) {
      return value as Record<string, unknown>;
    }

    const candidate = value as Record<string, any>;
    if (typeof candidate.toObject === 'function') {
      try {
        const plain = candidate.toObject();
        return this.isPlainObject(plain) ? plain : {};
      } catch {
        return {};
      }
    }

    return {};
  }

  private isPlainObject(value: unknown): value is Record<string, unknown> {
    if (!value || typeof value !== 'object') {
      return false;
    }
    const prototype = Object.getPrototypeOf(value);
    return prototype === Object.prototype || prototype === null;
  }

  private stringifyValue(value: unknown, fieldType: string): string {
    if (value === undefined || value === null) {
      return '';
    }

    const normalizedType = String(fieldType || '').trim().toLowerCase();

    if (normalizedType === 'boolean') {
      const parsed = this.parseBoolean(value);
      if (parsed === true) return 'Yes';
      if (parsed === false) return 'No';
      return '';
    }

    if (normalizedType === 'date' || normalizedType === 'datetime') {
      const parsed = new Date(String(value));
      if (Number.isNaN(parsed.getTime())) {
        return String(value);
      }
      return parsed.toISOString();
    }

    if (Array.isArray(value)) {
      return value.map((item) => String(item)).join(', ');
    }

    return String(value);
  }

  private buildCsv(fields: RecordFieldDefinition[], items: RecordItemResponse[]): string {
    const headers = ['Record ID', 'Created At', 'Updated At', ...fields.map((field) => field.name)];

    const rows = items.map((item) => [
      item.id,
      item.created_at ?? '',
      item.updated_at ?? '',
      ...fields.map((field) => this.stringifyValue(item.values[field.id], field.type)),
    ]);

    const csvRows = [headers, ...rows];
    return csvRows
      .map((row) => row.map((cell) => this.escapeCsvValue(cell)).join(','))
      .join('\n');
  }

  private escapeCsvValue(value: unknown): string {
    const text = String(value ?? '');
    if (!/[",\n]/.test(text)) {
      return text;
    }

    return `"${text.replace(/"/g, '""')}"`;
  }

  private normalizeExportName(value: string): string {
    return String(value || '')
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '_')
      .replace(/^_+|_+$/g, '')
      .slice(0, 64) || 'object';
  }

  private toListViewResponse(
    view: ObjectListViewDocument,
    allowedFieldIds?: string[],
    forcedDefaultViewId?: string | null,
  ): ListViewItemResponse {
    const rawVisibleFieldIds = Array.isArray(view.visible_field_ids)
      ? view.visible_field_ids
          .map((fieldId) => fieldId?.toString?.() ?? '')
          .map((fieldId) => fieldId.trim())
          .filter((fieldId) => fieldId.length > 0)
      : [];

    let visibleFieldIds = rawVisibleFieldIds;
    if (Array.isArray(allowedFieldIds) && allowedFieldIds.length) {
      const allowedSet = new Set(allowedFieldIds);
      visibleFieldIds = rawVisibleFieldIds.filter((fieldId) => allowedSet.has(fieldId));
      if (!visibleFieldIds.length) {
        visibleFieldIds = [allowedFieldIds[0]];
      }
    }

    const isDefault = forcedDefaultViewId
      ? view._id.toString() === forcedDefaultViewId
      : Boolean(view.is_default);

    return {
      id: view._id.toString(),
      object_id: view.object_id?.toString?.() ?? '',
      business_id: view.business_id?.toString?.() ?? null,
      name: String(view.name || '').trim() || 'View',
      visible_field_ids: visibleFieldIds,
      is_default: isDefault,
      status: Number(view.status ?? 1),
      created_at: (view as any).created_at ?? null,
      updated_at: (view as any).updated_at ?? null,
    };
  }

  private sanitizeVisibleFieldIds(
    rawFieldIds: unknown,
    fields: RecordFieldDefinition[],
    fallbackToAllWhenMissing: boolean,
  ): string[] {
    const allowedFieldIds = fields.map((field) => field.id);
    if (!allowedFieldIds.length) {
      return [];
    }

    if (
      (rawFieldIds === undefined || rawFieldIds === null) &&
      fallbackToAllWhenMissing
    ) {
      return allowedFieldIds;
    }

    const inputValues = Array.isArray(rawFieldIds)
      ? rawFieldIds
      : typeof rawFieldIds === 'string'
        ? rawFieldIds.split(',')
        : [];

    const sanitized = Array.from(
      new Set(
        inputValues
          .map((item) => String(item || '').trim())
          .filter((item) => item.length > 0)
          .filter((item) => allowedFieldIds.includes(item)),
      ),
    );

    return sanitized;
  }

  private normalizeListViewName(value: unknown): string {
    return String(value || '')
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 120);
  }

  private generateNextViewName(existingNames: string[]): string {
    const highest = existingNames.reduce((max, name) => {
      const match = /^view\s+(\d+)$/i.exec(String(name || '').trim());
      if (!match) {
        return max;
      }
      const parsed = Number(match[1]);
      if (!Number.isFinite(parsed)) {
        return max;
      }
      return Math.max(max, parsed);
    }, 0);

    return `View ${highest + 1}`;
  }

  private hasOwn(target: unknown, key: string): boolean {
    if (!target || typeof target !== 'object') {
      return false;
    }
    return Object.prototype.hasOwnProperty.call(target, key);
  }

  private escapeRegExp(value: string): string {
    return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  private parseObjectId(value: string): Types.ObjectId | null {
    if (!Types.ObjectId.isValid(value)) {
      return null;
    }

    return new Types.ObjectId(value);
  }
}
