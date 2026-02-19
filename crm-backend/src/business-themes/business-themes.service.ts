import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import {
  BusinessTheme,
  BusinessThemeDocument,
  ThemeTokens,
} from './schemas/business-theme.schema';
import { Business, BusinessDocument } from 'src/businesses/schemas/business.schema';

type ThemePayload = Partial<ThemeTokens> | null | undefined;

@Injectable()
export class BusinessThemesService {
  constructor(
    @InjectModel(BusinessTheme.name)
    private readonly businessThemeModel: Model<BusinessThemeDocument>,
    @InjectModel(Business.name)
    private readonly businessModel: Model<BusinessDocument>,
  ) {}

  private readonly defaultTheme: ThemeTokens = {
    primary: '#007AFF',
    primaryHover: '#0066E0',
    primaryContrast: '#FFFFFF',
    accentStart: '#00FF95',
    accentEnd: '#0055FF',
    textPrimary: '#1D1D1F',
    textSecondary: '#424245',
    textMuted: '#86868B',
    bgApp: '#F5F5F7',
    bgSurface: '#FFFFFF',
    bgSurfaceSoft: '#F0F2F5',
    border: '#D2D2D7',
    danger: '#FF3B30',
    dangerHover: '#E22F26',
    success: '#34C759',
  };

  private readonly namedColorRegex = /^[a-zA-Z]+$/;
  private readonly hexColorRegex = /^#(?:[0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/;
  private readonly rgbColorRegex = /^rgba?\([^)]+\)$/i;
  private readonly hslColorRegex = /^hsla?\([^)]+\)$/i;

  async cloneDefaultThemeToBusiness(userId: string | Types.ObjectId, businessId: string | Types.ObjectId) {
    const userObjectId = this.toObjectId(userId);
    const businessObjectId = this.toObjectId(businessId);
    const business = await this.findOwnedBusiness(userObjectId, businessObjectId);
    if (!business) {
      throw new Error('Business not found while cloning theme');
    }

    return this.ensureBusinessThemeForUser(userObjectId, businessObjectId);
  }

  async ensureDefaultThemeForUser(userId: string | Types.ObjectId) {
    const userObjectId = typeof userId === 'string' ? new Types.ObjectId(userId) : userId;
    const activeFilter = {
      user_id: userObjectId,
      business_id: null,
      name: 'default',
      deleted_at: null,
    } as const;
    const defaultThemeFilter = {
      user_id: userObjectId,
      business_id: null,
      name: 'default',
    } as const;

    let themeDoc = await this.businessThemeModel.findOne(activeFilter);
    if (themeDoc) {
      return themeDoc;
    }

    themeDoc = await this.businessThemeModel.findOne(defaultThemeFilter);
    if (themeDoc) {
      themeDoc.deleted_at = null;
      themeDoc.status = 1;
      await themeDoc.save();
      return themeDoc;
    }

    try {
      themeDoc = await this.businessThemeModel.create({
        user_id: userObjectId,
        business_id: null,
        name: 'default',
        theme: this.defaultTheme,
        status: 1,
        deleted_at: null,
      });
    } catch (error: any) {
      // Handle race where two requests try to create the default theme simultaneously.
      if (error?.code !== 11000) {
        throw error;
      }
      themeDoc = await this.businessThemeModel.findOne(defaultThemeFilter);
      if (themeDoc) {
        themeDoc.deleted_at = null;
        themeDoc.status = 1;
        await themeDoc.save();
      }
    }

    if (!themeDoc) {
      throw new Error('Unable to create default theme for user');
    }

    return themeDoc;
  }

  async getDefaultTheme(userId: string, businessId?: string | null) {
    const userObjectId = new Types.ObjectId(userId);
    let themeDoc: BusinessThemeDocument;
    let message = 'Default theme retrieved successfully';

    if (!businessId) {
      themeDoc = await this.ensureDefaultThemeForUser(userObjectId);
    } else {
      const businessObjectId = this.parseObjectId(businessId);
      if (!businessObjectId) {
        return { message: 'Invalid business id', status: false, statusCode: 400 };
      }

      const business = await this.findOwnedBusiness(userObjectId, businessObjectId);
      if (!business) {
        return { message: 'Business not found', status: false, statusCode: 404 };
      }

      themeDoc = await this.ensureBusinessThemeForUser(userObjectId, businessObjectId);
      message = 'Business theme retrieved successfully';
    }

    return {
      message,
      status: true,
      statusCode: 200,
      data: this.toThemeResponse(themeDoc),
    };
  }

  async upsertDefaultTheme(userId: string, payload: ThemePayload, businessId?: string | null) {
    const userObjectId = new Types.ObjectId(userId);
    const theme = this.normalizeTheme(payload);
    let businessObjectId: Types.ObjectId | null = null;
    let message = 'Default theme saved successfully';

    if (businessId) {
      businessObjectId = this.parseObjectId(businessId);
      if (!businessObjectId) {
        return { message: 'Invalid business id', status: false, statusCode: 400 };
      }
      const business = await this.findOwnedBusiness(userObjectId, businessObjectId);
      if (!business) {
        return { message: 'Business not found', status: false, statusCode: 404 };
      }
      message = 'Business theme saved successfully';
    }

    const updated = await this.businessThemeModel.findOneAndUpdate(
      {
        user_id: userObjectId,
        business_id: businessObjectId,
        name: 'default',
      },
      {
        $set: {
          theme,
          status: 1,
          deleted_at: null,
        },
        $setOnInsert: {
          user_id: userObjectId,
          business_id: businessObjectId,
          name: 'default',
        },
      },
      { upsert: true, returnDocument: 'after' },
    );

    return {
      message,
      status: true,
      statusCode: 200,
      data: this.toThemeResponse(updated),
    };
  }

  private async ensureBusinessThemeForUser(userId: Types.ObjectId, businessId: Types.ObjectId) {
    const activeFilter = {
      user_id: userId,
      business_id: businessId,
      name: 'default',
      deleted_at: null,
    } as const;
    const anyFilter = {
      user_id: userId,
      business_id: businessId,
      name: 'default',
    } as const;

    let themeDoc = await this.businessThemeModel.findOne(activeFilter);
    if (themeDoc) {
      return themeDoc;
    }

    const defaultThemeDoc = await this.ensureDefaultThemeForUser(userId);
    const sourceTheme = this.toThemeTokens(defaultThemeDoc);

    themeDoc = await this.businessThemeModel.findOne(anyFilter);
    if (themeDoc) {
      themeDoc.theme = sourceTheme as any;
      themeDoc.deleted_at = null;
      themeDoc.status = 1;
      await themeDoc.save();
      return themeDoc;
    }

    try {
      themeDoc = await this.businessThemeModel.create({
        user_id: userId,
        business_id: businessId,
        name: 'default',
        theme: sourceTheme,
        status: 1,
        deleted_at: null,
      });
    } catch (error: any) {
      if (error?.code !== 11000) {
        throw error;
      }
      themeDoc = await this.businessThemeModel.findOne(anyFilter);
      if (themeDoc) {
        themeDoc.deleted_at = null;
        themeDoc.status = 1;
        await themeDoc.save();
      }
    }

    if (!themeDoc) {
      throw new Error('Unable to create business theme');
    }

    return themeDoc;
  }

  private toObjectId(value: string | Types.ObjectId): Types.ObjectId {
    return typeof value === 'string' ? new Types.ObjectId(value) : value;
  }

  private parseObjectId(value: string): Types.ObjectId | null {
    if (!Types.ObjectId.isValid(value)) {
      return null;
    }
    return new Types.ObjectId(value);
  }

  private async findOwnedBusiness(userId: Types.ObjectId, businessId: Types.ObjectId) {
    return this.businessModel.findOne({
      _id: businessId,
      user_id: userId,
      deleted_at: null,
    });
  }

  private toThemeTokens(themeDoc: BusinessThemeDocument): ThemeTokens {
    const rawTheme =
      themeDoc.theme && typeof (themeDoc.theme as any).toObject === 'function'
        ? (themeDoc.theme as any).toObject()
        : themeDoc.theme;
    return this.normalizeTheme(rawTheme);
  }

  private normalizeTheme(theme: ThemePayload): ThemeTokens {
    const normalized = {} as ThemeTokens;

    (Object.keys(this.defaultTheme) as Array<keyof ThemeTokens>).forEach((key) => {
      normalized[key] = this.resolveColor(theme?.[key], this.defaultTheme[key]);
    });

    return normalized;
  }

  private resolveColor(value: unknown, fallback: string): string {
    if (typeof value !== 'string') {
      return fallback;
    }

    const color = value.trim();
    if (!color) {
      return fallback;
    }

    return this.isColorValue(color) ? color : fallback;
  }

  private isColorValue(color: string): boolean {
    return (
      this.hexColorRegex.test(color) ||
      this.rgbColorRegex.test(color) ||
      this.hslColorRegex.test(color) ||
      this.namedColorRegex.test(color)
    );
  }

  private toThemeResponse(theme: BusinessThemeDocument | null) {
    if (!theme) return null;

    const themeTokens =
      theme.theme && typeof (theme.theme as any).toObject === 'function'
        ? (theme.theme as any).toObject()
        : theme.theme;

    return {
      id: theme._id.toString(),
      user_id: theme.user_id?.toString?.() ?? null,
      business_id: theme.business_id?.toString?.() ?? null,
      name: theme.name,
      theme: themeTokens,
      status: theme.status,
      created_at: (theme as any).created_at ?? null,
      updated_at: (theme as any).updated_at ?? null,
    };
  }
}
