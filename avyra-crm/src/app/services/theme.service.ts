import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { StorageService } from './storage.service';

export interface ThemeConfig {
  primary: string;
  primaryHover: string;
  primaryContrast: string;
  accentStart: string;
  accentEnd: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  bgApp: string;
  bgSurface: string;
  bgSurfaceSoft: string;
  border: string;
  danger: string;
  dangerHover: string;
  success: string;
}

interface ApiResponse<T> {
  message: string;
  data: T | null;
  status: boolean;
}

interface BusinessThemeRecord {
  id: string;
  user_id: string | null;
  business_id: string | null;
  name: string;
  theme: ThemeConfig;
  status: number;
  created_at: string | null;
  updated_at: string | null;
}

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly STORAGE_KEY = 'crm_theme';
  private readonly TOKEN_KEY = 'auth_token';
  private readonly API_BASE_URL = 'http://localhost:3000/api/v1';
  private readonly isBrowser: boolean;

  private readonly defaultTheme: ThemeConfig = {
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

  private readonly cssVarMap: { [K in keyof ThemeConfig]: string } = {
    primary: '--theme-primary',
    primaryHover: '--theme-primary-hover',
    primaryContrast: '--theme-primary-contrast',
    accentStart: '--theme-accent-start',
    accentEnd: '--theme-accent-end',
    textPrimary: '--theme-text-primary',
    textSecondary: '--theme-text-secondary',
    textMuted: '--theme-text-muted',
    bgApp: '--theme-bg-app',
    bgSurface: '--theme-bg-surface',
    bgSurfaceSoft: '--theme-bg-surface-soft',
    border: '--theme-border',
    danger: '--theme-danger',
    dangerHover: '--theme-danger-hover',
    success: '--theme-success',
  };

  readonly theme = signal<ThemeConfig>({ ...this.defaultTheme });

  constructor(
    private readonly storage: StorageService,
    private readonly http: HttpClient,
    @Inject(PLATFORM_ID) platformId: object,
    @Inject(DOCUMENT) private readonly document: Document
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  initTheme(): ThemeConfig {
    const storedTheme = this.storage.getItem<Partial<ThemeConfig>>(this.STORAGE_KEY);
    const nextTheme = this.normalizeTheme(storedTheme);
    if (storedTheme) {
      this.storage.setItem(this.STORAGE_KEY, nextTheme);
    }
    this.applyTheme(nextTheme);
    this.theme.set(nextTheme);
    this.syncThemeFromBackend('default');
    return nextTheme;
  }

  updateTheme(partialTheme: Partial<ThemeConfig>): ThemeConfig {
    const nextTheme = this.normalizeTheme({
      ...this.theme(),
      ...partialTheme,
    });
    this.storage.setItem(this.STORAGE_KEY, nextTheme);
    this.applyTheme(nextTheme);
    this.theme.set(nextTheme);
    return nextTheme;
  }

  resetTheme(): ThemeConfig {
    this.storage.removeItem(this.STORAGE_KEY);
    this.applyTheme(this.defaultTheme);
    this.theme.set({ ...this.defaultTheme });
    return { ...this.defaultTheme };
  }

  getDefaultTheme(): ThemeConfig {
    return { ...this.defaultTheme };
  }

  syncDefaultThemeFromBackend(): void {
    this.syncThemeFromBackend('default');
  }

  syncThemeFromBackend(businessId: string = 'default'): void {
    const token = this.storage.getItem<string>(this.TOKEN_KEY);
    if (!token) {
      return;
    }

    const normalizedBusinessId = this.normalizeBusinessId(businessId);
    let params = new HttpParams();
    if (normalizedBusinessId) {
      params = params.set('business_id', normalizedBusinessId);
    }

    this.http
      .get<ApiResponse<BusinessThemeRecord>>(`${this.API_BASE_URL}/business-themes/default`, {
        headers: this.getAuthHeaders(token),
        params,
      })
      .subscribe({
        next: (response) => {
          if (!response.status || !response.data?.theme) {
            return;
          }
          const nextTheme = this.normalizeTheme(response.data.theme);
          this.storage.setItem(this.STORAGE_KEY, nextTheme);
          this.applyTheme(nextTheme);
          this.theme.set(nextTheme);
        },
        error: () => {
          // Keep local fallback when backend is not reachable.
        },
      });
  }

  saveDefaultTheme(theme: Partial<ThemeConfig>): void {
    this.saveTheme(theme, 'default');
  }

  saveTheme(theme: Partial<ThemeConfig>, businessId: string = 'default'): void {
    const token = this.storage.getItem<string>(this.TOKEN_KEY);
    if (!token) {
      return;
    }

    const normalizedTheme = this.normalizeTheme(theme);
    const normalizedBusinessId = this.normalizeBusinessId(businessId);
    this.http
      .post<ApiResponse<BusinessThemeRecord>>(
        `${this.API_BASE_URL}/business-themes/default`,
        {
          name: 'default',
          ...(normalizedBusinessId ? { business_id: normalizedBusinessId } : {}),
          theme: normalizedTheme,
        },
        {
          headers: this.getAuthHeaders(token),
        }
      )
      .subscribe({
        next: (response) => {
          if (!response.status || !response.data?.theme) {
            return;
          }
          const savedTheme = this.normalizeTheme(response.data.theme);
          this.storage.setItem(this.STORAGE_KEY, savedTheme);
          this.applyTheme(savedTheme);
          this.theme.set(savedTheme);
        },
        error: () => {
          // Theme is still applied locally even when save API fails.
        },
      });
  }

  private normalizeBusinessId(businessId: string | null | undefined): string | null {
    if (!businessId || businessId === 'default') {
      return null;
    }

    return businessId;
  }

  private normalizeTheme(theme: Partial<ThemeConfig> | null): ThemeConfig {
    const normalized = {} as ThemeConfig;

    (Object.keys(this.defaultTheme) as Array<keyof ThemeConfig>).forEach((key) => {
      normalized[key] = this.resolveColor(theme?.[key], this.defaultTheme[key]);
    });

    return normalized;
  }

  private getAuthHeaders(token: string): HttpHeaders {
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }

  private applyTheme(theme: ThemeConfig): void {
    if (!this.isBrowser) {
      return;
    }

    const root = this.document.documentElement;
    (Object.keys(this.cssVarMap) as Array<keyof ThemeConfig>).forEach((key) => {
      root.style.setProperty(this.cssVarMap[key], theme[key]);
    });
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
    if (this.isBrowser && typeof CSS !== 'undefined' && CSS.supports('color', color)) {
      return true;
    }

    return /^#(?:[0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(color);
  }
}
