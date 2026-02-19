import { Injectable, signal } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { StorageService } from './storage.service';

interface ApiResponse<T> {
  message: string;
  data: T | null;
  status: boolean;
}

export interface CrmObjectRecord {
  id: string;
  user_id: string | null;
  name: string;
  key: string;
  description: string | null;
  mapped_business_ids: string[];
  mapped_business_count: number;
  status: number;
  created_at: string | null;
  updated_at: string | null;
}

export interface CreateObjectPayload {
  name: string;
  key?: string;
  description?: string | null;
  status?: number;
}

@Injectable({
  providedIn: 'root',
})
export class ObjectService {
  private readonly TOKEN_KEY = 'auth_token';
  private readonly API_BASE_URL = 'http://localhost:3000/api/v1';

  readonly objects = signal<CrmObjectRecord[]>([]);
  readonly isLoading = signal<boolean>(false);

  constructor(
    private readonly http: HttpClient,
    private readonly storage: StorageService,
  ) {}

  loadObjects(businessId: string = 'default'): void {
    const headers = this.getAuthHeaders();
    if (!headers) {
      this.isLoading.set(false);
      this.objects.set([]);
      return;
    }

    const params = this.buildContextParams(businessId);
    this.isLoading.set(true);
    this.http
      .get<ApiResponse<CrmObjectRecord[]>>(`${this.API_BASE_URL}/objects`, {
        headers,
        params,
      })
      .subscribe({
        next: (response) => {
          this.isLoading.set(false);
          this.objects.set(Array.isArray(response.data) ? response.data : []);
        },
        error: () => {
          this.isLoading.set(false);
          this.objects.set([]);
        },
      });
  }

  createObject(payload: CreateObjectPayload, businessId: string = 'default'): Observable<ApiResponse<CrmObjectRecord>> {
    const headers = this.getAuthHeaders();
    const body = {
      ...payload,
      ...(businessId !== 'default' ? { business_id: businessId } : {}),
    };

    return this.http
      .post<ApiResponse<CrmObjectRecord>>(`${this.API_BASE_URL}/objects`, body, {
        headers: headers ?? undefined,
      })
      .pipe(
        tap((response) => {
          if (response.status) {
            this.loadObjects(businessId);
          }
        }),
      );
  }

  fetchUserObjects(): Observable<ApiResponse<CrmObjectRecord[]>> {
    const headers = this.getAuthHeaders();
    const params = new HttpParams().set('include_mapped', '1');
    return this.http.get<ApiResponse<CrmObjectRecord[]>>(`${this.API_BASE_URL}/objects`, {
      headers: headers ?? undefined,
      params,
    });
  }

  mapObjectToBusiness(
    objectId: string,
    targetBusinessId: string,
    currentBusinessId: string = 'default',
  ): Observable<ApiResponse<CrmObjectRecord>> {
    const headers = this.getAuthHeaders();
    return this.http
      .post<ApiResponse<CrmObjectRecord>>(
        `${this.API_BASE_URL}/objects/${objectId}/businesses`,
        { business_id: targetBusinessId },
        {
          headers: headers ?? undefined,
        },
      )
      .pipe(
        tap((response) => {
          if (response.status) {
            this.loadObjects(currentBusinessId);
          }
        }),
      );
  }

  deleteObject(objectId: string, businessId: string = 'default'): Observable<ApiResponse<null>> {
    const headers = this.getAuthHeaders();
    return this.http
      .delete<ApiResponse<null>>(`${this.API_BASE_URL}/objects/${objectId}`, {
        headers: headers ?? undefined,
      })
      .pipe(
        tap((response) => {
          if (response.status) {
            this.loadObjects(businessId);
          }
        }),
      );
  }

  clearState(): void {
    this.isLoading.set(false);
    this.objects.set([]);
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

  private buildContextParams(businessId: string): HttpParams {
    let params = new HttpParams();
    if (businessId && businessId !== 'default') {
      params = params.set('business_id', businessId);
    }
    return params;
  }
}
