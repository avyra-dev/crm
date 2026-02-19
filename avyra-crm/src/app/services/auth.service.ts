import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from './storage.service';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { ThemeService } from './theme.service';
import { BusinessService } from './business.service';
import { ObjectService } from './object.service';
import { FieldService } from './field.service';

export interface User {
  id: string;
  name: string;
  email?: string | null;
  phone_number: string;
  role?: string;
  avatar?: string;
}

export interface ApiResponse<T> {
  message: string;
  data: T | null;
  status: boolean;
}

export interface OtpRequestData {
  expires_at: string;
  is_new_user?: boolean;
  otp?: string;
}

export interface OtpVerifyData {
  token: string;
  user: User;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly USER_KEY = 'auth_user';
  private readonly TOKEN_KEY = 'auth_token';
  private readonly API_BASE_URL = 'http://localhost:3000/api/v1';
  currentUser = signal<User | null>(null);

  constructor(
    private storage: StorageService,
    private router: Router,
    private http: HttpClient,
    private themeService: ThemeService,
    private businessService: BusinessService,
    private objectService: ObjectService,
    private fieldService: FieldService,
  ) {
    this.loadUser();
  }

  private loadUser() {
    const token = this.storage.getItem<string>(this.TOKEN_KEY);
    const user = this.storage.getItem<User>(this.USER_KEY);
    if (token && user && this.isTokenValid(token)) {
      this.currentUser.set(user);
      return;
    }

    this.clearSessionState();
  }

  requestOtp(phone_number: string): Observable<ApiResponse<OtpRequestData>> {
    return this.http.post<ApiResponse<OtpRequestData>>(`${this.API_BASE_URL}/users/otp`, { phone_number });
  }

  verifyOtp(phone_number: string, otp: string): Observable<ApiResponse<OtpVerifyData>> {
    return this.http
      .post<ApiResponse<OtpVerifyData>>(`${this.API_BASE_URL}/users/otp/verify`, { phone_number, otp })
      .pipe(
        tap((response) => {
          if (response.status && response.data?.token && response.data?.user) {
            this.setSession(response.data.token, response.data.user);
            this.themeService.syncDefaultThemeFromBackend();
            this.router.navigate(['/dashboard']);
          }
        }),
      );
  }

  private setSession(token: string, user: User) {
    const hydratedUser = {
      ...user,
      avatar: user.avatar || this.generateAvatar(user.name || user.phone_number),
      role: user.role ?? 'Admin',
    };
    this.storage.setItem(this.TOKEN_KEY, token);
    this.storage.setItem(this.USER_KEY, hydratedUser);
    this.currentUser.set(hydratedUser);
  }

  getToken(): string | null {
    const token = this.storage.getItem<string>(this.TOKEN_KEY);
    if (!token || !this.isTokenValid(token)) {
      this.clearSessionState();
      return null;
    }

    return token;
  }

  logout() {
    this.clearSessionState();
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return Boolean(this.getToken() && this.currentUser());
  }

  private generateAvatar(label: string): string {
    const safe = encodeURIComponent(label);
    return `https://ui-avatars.com/api/?name=${safe}&background=0D8ABC&color=fff`;
  }

  private clearSessionState() {
    this.storage.removeItem(this.TOKEN_KEY);
    this.storage.removeItem(this.USER_KEY);
    this.businessService.clearState();
    this.objectService.clearState();
    this.fieldService.clearState();
    this.themeService.resetTheme();
    this.currentUser.set(null);
  }

  private isTokenValid(token: string): boolean {
    const payload = this.decodeJwtPayload(token);
    if (!payload) {
      return false;
    }

    if (typeof payload.exp !== 'number') {
      return true;
    }

    return payload.exp * 1000 > Date.now();
  }

  private decodeJwtPayload(token: string): { exp?: number } | null {
    const parts = String(token || '').split('.');
    if (parts.length < 2) {
      return null;
    }

    const payloadPart = parts[1];
    const base64 = payloadPart.replace(/-/g, '+').replace(/_/g, '/');
    const padded = base64.padEnd(Math.ceil(base64.length / 4) * 4, '=');
    if (typeof atob !== 'function') {
      return null;
    }

    try {
      const decoded = atob(padded);
      const payload = JSON.parse(decoded);
      if (!payload || typeof payload !== 'object') {
        return null;
      }
      return payload as { exp?: number };
    } catch {
      return null;
    }
  }
}
