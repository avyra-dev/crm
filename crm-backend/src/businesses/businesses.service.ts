import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Business, BusinessDocument } from './schemas/business.schema';
import { BusinessThemesService } from 'src/business-themes/business-themes.service';

interface BusinessPayload {
  name?: string;
  logo_path?: string | null;
  status?: number | string | null;
  type?: string;
}

@Injectable()
export class BusinessesService {
  constructor(
    @InjectModel(Business.name)
    private readonly businessModel: Model<BusinessDocument>,
    private readonly businessThemesService: BusinessThemesService,
  ) {}

  async createBusiness(userId: string, payload: BusinessPayload) {
    const validation = this.validateCreatePayload(payload);
    if (!validation.valid) {
      return { message: validation.message, status: false, statusCode: 400 };
    }

    const business = await this.businessModel.create({
      user_id: new Types.ObjectId(userId),
      name: validation.name,
      logo_path: validation.logo_path,
      status: validation.status,
      type: validation.type,
      deleted_at: null,
    });
    await this.businessThemesService.cloneDefaultThemeToBusiness(userId, business._id.toString());

    return {
      message: 'Business created successfully',
      status: true,
      statusCode: 201,
      data: this.toBusinessResponse(business),
    };
  }

  async findAll(userId: string) {
    const businesses = await this.businessModel
      .find({
        user_id: new Types.ObjectId(userId),
        deleted_at: null,
      })
      .sort({ created_at: -1 });

    return {
      message: 'Businesses retrieved successfully',
      status: true,
      statusCode: 200,
      data: businesses.map((business) => this.toBusinessResponse(business)),
    };
  }

  async findOne(userId: string, businessId: string) {
    const userObjectId = new Types.ObjectId(userId);
    const businessObjectId = this.parseObjectId(businessId);
    if (!businessObjectId) {
      return { message: 'Invalid business id', status: false, statusCode: 400 };
    }

    const business = await this.businessModel.findOne({
      _id: businessObjectId,
      user_id: userObjectId,
      deleted_at: null,
    });

    if (!business) {
      return { message: 'Business not found', status: false, statusCode: 404 };
    }

    return {
      message: 'Business retrieved successfully',
      status: true,
      statusCode: 200,
      data: this.toBusinessResponse(business),
    };
  }

  async updateBusiness(userId: string, businessId: string, payload: BusinessPayload) {
    const userObjectId = new Types.ObjectId(userId);
    const businessObjectId = this.parseObjectId(businessId);
    if (!businessObjectId) {
      return { message: 'Invalid business id', status: false, statusCode: 400 };
    }

    const updateData = this.buildUpdatePayload(payload);
    if (!updateData) {
      return { message: 'No valid fields provided for update', status: false, statusCode: 400 };
    }

    const business = await this.businessModel.findOneAndUpdate(
      {
        _id: businessObjectId,
        user_id: userObjectId,
        deleted_at: null,
      },
      { $set: updateData },
      { returnDocument: 'after' },
    );

    if (!business) {
      return { message: 'Business not found', status: false, statusCode: 404 };
    }

    return {
      message: 'Business updated successfully',
      status: true,
      statusCode: 200,
      data: this.toBusinessResponse(business),
    };
  }

  async deleteBusiness(userId: string, businessId: string) {
    const userObjectId = new Types.ObjectId(userId);
    const businessObjectId = this.parseObjectId(businessId);
    if (!businessObjectId) {
      return { message: 'Invalid business id', status: false, statusCode: 400 };
    }

    const business = await this.businessModel.findOneAndUpdate(
      {
        _id: businessObjectId,
        user_id: userObjectId,
        deleted_at: null,
      },
      {
        $set: {
          deleted_at: new Date(),
          status: 0,
        },
      },
      { returnDocument: 'after' },
    );

    if (!business) {
      return { message: 'Business not found', status: false, statusCode: 404 };
    }

    return {
      message: 'Business deleted successfully',
      status: true,
      statusCode: 200,
      data: null,
    };
  }

  private validateCreatePayload(payload: BusinessPayload) {
    const name = payload?.name?.trim();
    const type = payload?.type?.trim();
    const logoPath = typeof payload?.logo_path === 'string' ? payload.logo_path.trim() : payload?.logo_path;
    const status = this.parseStatus(payload?.status);

    if (!name) {
      return { valid: false as const, message: 'Business name is required' };
    }
    if (!type) {
      return { valid: false as const, message: 'Business type is required' };
    }
    if (status === null) {
      return { valid: false as const, message: 'Status must be a valid number' };
    }

    return {
      valid: true as const,
      name,
      type,
      logo_path: logoPath || null,
      status: status ?? 1,
    };
  }

  private buildUpdatePayload(payload: BusinessPayload) {
    const updateData: Record<string, any> = {};

    if (typeof payload?.name === 'string' && payload.name.trim()) {
      updateData.name = payload.name.trim();
    }
    if (typeof payload?.type === 'string' && payload.type.trim()) {
      updateData.type = payload.type.trim();
    }
    if (typeof payload?.logo_path === 'string') {
      updateData.logo_path = payload.logo_path.trim() || null;
    }
    if (payload?.logo_path === null) {
      updateData.logo_path = null;
    }
    if (payload && Object.prototype.hasOwnProperty.call(payload, 'status')) {
      const status = this.parseStatus(payload?.status);
      if (status !== null) {
        updateData.status = status;
      }
    }

    return Object.keys(updateData).length ? updateData : null;
  }

  private parseStatus(value: unknown): number | null | undefined {
    if (value === undefined) return undefined;
    if (value === null) return null;

    const status = typeof value === 'number' ? value : Number(String(value).trim());
    if (!Number.isFinite(status)) return null;
    return Math.max(0, Math.trunc(status));
  }

  private parseObjectId(value: string) {
    if (!Types.ObjectId.isValid(value)) {
      return null;
    }
    return new Types.ObjectId(value);
  }

  private toBusinessResponse(business: BusinessDocument | null) {
    if (!business) return null;
    return {
      id: business._id.toString(),
      user_id: business.user_id?.toString?.() ?? null,
      name: business.name,
      logo_path: business.logo_path ?? null,
      status: business.status,
      type: business.type,
      created_at: (business as any).created_at ?? null,
      updated_at: (business as any).updated_at ?? null,
    };
  }
}
