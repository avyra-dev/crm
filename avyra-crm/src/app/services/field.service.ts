import { Injectable, signal } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { StorageService } from './storage.service';

interface ApiResponse<T> {
  message: string;
  data: T | null;
  status: boolean;
}

export interface CrmFieldMapping {
  object_id: string;
  business_id: string | null;
}

export interface CrmFieldRecord {
  id: string;
  user_id: string | null;
  name: string;
  key: string;
  type: string;
  description: string | null;
  is_required: boolean;
  options: string[];
  mapped_object_ids: string[];
  mapped_object_count: number;
  mapped_business_ids: string[];
  mapped_business_count: number;
  mapped_objects: CrmFieldMapping[];
  status: number;
  created_at: string | null;
  updated_at: string | null;
}

export interface CreateFieldPayload {
  name: string;
  key?: string;
  type?: string;
  description?: string | null;
  is_required?: boolean;
  options?: string[];
  status?: number;
}

@Injectable({
  providedIn: 'root',
})
export class FieldService {
  private readonly TOKEN_KEY = 'auth_token';
  private readonly API_BASE_URL = 'http://localhost:3000/api/v1';

  readonly fields = signal<CrmFieldRecord[]>([]);
  readonly isLoading = signal<boolean>(false);

  constructor(
    private readonly http: HttpClient,
    private readonly storage: StorageService,
  ) {}

  loadFields(businessId: string = 'default', objectId?: string): void {
    const headers = this.getAuthHeaders();
    if (!headers) {
      this.isLoading.set(false);
      this.fields.set([]);
      return;
    }

    const params = this.buildContextParams(businessId, objectId);
    this.isLoading.set(true);
    this.http
      .get<ApiResponse<CrmFieldRecord[]>>(`${this.API_BASE_URL}/fields`, {
        headers,
        params,
      })
      .subscribe({
        next: (response) => {
          this.isLoading.set(false);
          this.fields.set(Array.isArray(response.data) ? response.data : []);
        },
        error: () => {
          this.isLoading.set(false);
          this.fields.set([]);
        },
      });
  }

  createField(
    payload: CreateFieldPayload,
    businessId: string = 'default',
    objectId?: string,
    refreshContext?: { businessId?: string; objectId?: string },
  ): Observable<ApiResponse<CrmFieldRecord>> {
    const headers = this.getAuthHeaders();
    const body = {
      ...payload,
      ...(objectId ? { object_id: objectId } : {}),
      ...(businessId !== 'default' ? { business_id: businessId } : {}),
    };

    return this.http
      .post<ApiResponse<CrmFieldRecord>>(`${this.API_BASE_URL}/fields`, body, {
        headers: headers ?? undefined,
      })
      .pipe(
        tap((response) => {
          if (response.status) {
            this.loadFields(
              refreshContext?.businessId ?? businessId,
              refreshContext?.objectId ?? objectId,
            );
          }
        }),
      );
  }

  mapFieldToObject(
    fieldId: string,
    objectId: string,
    businessId: string = 'default',
    refreshContext?: { businessId?: string; objectId?: string },
  ): Observable<ApiResponse<CrmFieldRecord>> {
    const headers = this.getAuthHeaders();
    const body = {
      object_id: objectId,
      ...(businessId !== 'default' ? { business_id: businessId } : {}),
    };

    return this.http
      .post<ApiResponse<CrmFieldRecord>>(
        `${this.API_BASE_URL}/fields/${fieldId}/objects`,
        body,
        {
          headers: headers ?? undefined,
        },
      )
      .pipe(
        tap((response) => {
          if (response.status) {
            this.loadFields(
              refreshContext?.businessId ?? 'default',
              refreshContext?.objectId,
            );
          }
        }),
      );
  }

  deleteField(
    fieldId: string,
    refreshContext?: { businessId?: string; objectId?: string },
  ): Observable<ApiResponse<null>> {
    const headers = this.getAuthHeaders();
    return this.http
      .delete<ApiResponse<null>>(`${this.API_BASE_URL}/fields/${fieldId}`, {
        headers: headers ?? undefined,
      })
      .pipe(
        tap((response) => {
          if (response.status) {
            this.loadFields(refreshContext?.businessId ?? 'default', refreshContext?.objectId);
          }
        }),
      );
  }

  unmapFieldFromObject(
    fieldId: string,
    objectId: string,
    businessId: string = 'default',
    refreshContext?: { businessId?: string; objectId?: string },
  ): Observable<ApiResponse<CrmFieldRecord>> {
    const headers = this.getAuthHeaders();
    let params = new HttpParams();
    if (businessId && businessId !== 'default') {
      params = params.set('business_id', businessId);
    }

    return this.http
      .delete<ApiResponse<CrmFieldRecord>>(
        `${this.API_BASE_URL}/fields/${fieldId}/objects/${objectId}`,
        {
          headers: headers ?? undefined,
          params,
        },
      )
      .pipe(
        tap((response) => {
          if (response.status) {
            this.loadFields(
              refreshContext?.businessId ?? businessId,
              refreshContext?.objectId ?? objectId,
            );
          }
        }),
      );
  }

  fetchUserFields(): Observable<ApiResponse<CrmFieldRecord[]>> {
    const headers = this.getAuthHeaders();
    return this.http.get<ApiResponse<CrmFieldRecord[]>>(`${this.API_BASE_URL}/fields`, {
      headers: headers ?? undefined,
    });
  }

  clearState(): void {
    this.isLoading.set(false);
    this.fields.set([]);
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

  private buildContextParams(businessId: string, objectId?: string): HttpParams {
    let params = new HttpParams();
    if (businessId && businessId !== 'default') {
      params = params.set('business_id', businessId);
    }
    if (objectId) {
      params = params.set('object_id', objectId);
    }
    return params;
  }
}
