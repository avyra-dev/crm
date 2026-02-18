import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import {
  BusinessTheme,
  BusinessThemeDocument,
  ThemeTokens,
} from './schemas/business-theme.schema';

type ThemePayload = Partial<ThemeTokens> | null | undefined;

@Injectable()
export class BusinessThemesService {
  constructor(
    @InjectModel(BusinessTheme.name)
    private readonly businessThemeModel: Model<BusinessThemeDocument>,
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

  async getDefaultTheme(userId: string) {
    const userObjectId = new Types.ObjectId(userId);

    let themeDoc = await this.businessThemeModel.findOne({
      user_id: userObjectId,
      business_id: null,
      name: 'default',
      deleted_at: null,
    });

    if (!themeDoc) {
      themeDoc = await this.businessThemeModel.create({
        user_id: userObjectId,
        business_id: null,
        name: 'default',
        theme: this.defaultTheme,
        status: 1,
        deleted_at: null,
      });
    }

    return {
      message: 'Default theme retrieved successfully',
      status: true,
      statusCode: 200,
      data: this.toThemeResponse(themeDoc),
    };
  }

  async upsertDefaultTheme(userId: string, payload: ThemePayload) {
    const userObjectId = new Types.ObjectId(userId);
    const theme = this.normalizeTheme(payload);

    const updated = await this.businessThemeModel.findOneAndUpdate(
      {
        user_id: userObjectId,
        business_id: null,
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
          business_id: null,
          name: 'default',
        },
      },
      { upsert: true, returnDocument: 'after' },
    );

    return {
      message: 'Default theme saved successfully',
      status: true,
      statusCode: 200,
      data: this.toThemeResponse(updated),
    };
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
