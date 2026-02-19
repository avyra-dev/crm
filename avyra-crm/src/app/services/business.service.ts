import { Injectable, signal } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { StorageService } from './storage.service';

interface ApiResponse<T> {
  message: string;
  data: T | null;
  status: boolean;
}

export interface Business {
  id: string;
  user_id: string | null;
  name: string;
  logo_path: string | null;
  status: number;
  type: string;
  created_at: string | null;
  updated_at: string | null;
}

interface CreateBusinessPayload {
  name: string;
  type: string;
  status?: number;
  logo?: File | null;
}

@Injectable({
  providedIn: 'root',
})
export class BusinessService {
  private readonly TOKEN_KEY = 'auth_token';
  private readonly SELECTED_BUSINESS_KEY = 'selected_business_id';
  private readonly API_BASE_URL = 'http://localhost:3000/api/v1';
  private readonly API_ORIGIN = 'http://localhost:3000';

  readonly businesses = signal<Business[]>([]);
  readonly selectedBusinessId = signal<string>('default');
  readonly isLoading = signal<boolean>(false);

  constructor(
    private readonly http: HttpClient,
    private readonly storage: StorageService,
  ) {
    const storedSelection = this.storage.getItem<string>(this.SELECTED_BUSINESS_KEY);
    this.selectedBusinessId.set(storedSelection || 'default');
  }

  loadBusinesses(preferredSelectionId?: string): void {
    const headers = this.getAuthHeaders();
    if (!headers) {
      this.businesses.set([]);
      this.setSelectedBusiness('default');
      return;
    }

    this.isLoading.set(true);
    this.http
      .get<ApiResponse<Business[]>>(`${this.API_BASE_URL}/businesses`, { headers })
      .subscribe({
        next: (response) => {
          this.isLoading.set(false);
          const businesses = Array.isArray(response.data) ? response.data.map((item) => this.hydrateBusiness(item)) : [];
          this.businesses.set(businesses);
          this.ensureValidSelection(preferredSelectionId);
        },
        error: () => {
          this.isLoading.set(false);
          this.businesses.set([]);
          this.setSelectedBusiness('default');
        },
      });
  }

  createBusiness(payload: CreateBusinessPayload): Observable<ApiResponse<Business>> {
    const formData = new FormData();
    formData.append('name', payload.name.trim());
    formData.append('type', payload.type.trim());
    formData.append('status', String(payload.status ?? 1));
    if (payload.logo) {
      formData.append('logo', payload.logo);
    }

    const headers = this.getAuthHeaders();
    return this.http
      .post<ApiResponse<Business>>(`${this.API_BASE_URL}/businesses`, formData, {
        headers: headers ?? undefined,
      })
      .pipe(
        tap((response) => {
          if (response.status && response.data?.id) {
            this.loadBusinesses(response.data.id);
          }
        }),
      );
  }

  setSelectedBusiness(businessId: string): void {
    const resolved = businessId || 'default';
    this.selectedBusinessId.set(resolved);
    this.storage.setItem(this.SELECTED_BUSINESS_KEY, resolved);
  }

  clearState(): void {
    this.businesses.set([]);
    this.setSelectedBusiness('default');
  }

  selectedBusiness(): Business | null {
    const selectedId = this.selectedBusinessId();
    if (selectedId === 'default') {
      return null;
    }
    return this.businesses().find((business) => business.id === selectedId) ?? null;
  }

  private ensureValidSelection(preferredSelectionId?: string) {
    if (preferredSelectionId) {
      const hasPreferred = this.businesses().some((item) => item.id === preferredSelectionId);
      if (hasPreferred) {
        this.setSelectedBusiness(preferredSelectionId);
        return;
      }
    }

    const selectedId = this.selectedBusinessId();
    if (selectedId === 'default') {
      return;
    }

    const exists = this.businesses().some((item) => item.id === selectedId);
    if (!exists) {
      this.setSelectedBusiness('default');
    }
  }

  private hydrateBusiness(business: Business): Business {
    return {
      ...business,
      logo_path: this.resolveLogoPath(business.logo_path),
    };
  }

  private resolveLogoPath(path: string | null): string | null {
    if (!path) return null;
    if (/^https?:\/\//i.test(path)) {
      return path;
    }
    return `${this.API_ORIGIN}${path.startsWith('/') ? path : `/${path}`}`;
  }

  private getAuthHeaders(): HttpHeaders | null {
    const token = this.storage.getItem<string>(this.TOKEN_KEY);
    if (!token) {
      return null;
    }

    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }
}
