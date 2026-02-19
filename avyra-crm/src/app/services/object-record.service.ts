import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';

interface ApiResponse<T> {
  message: string;
  data: T | null;
  status: boolean;
}

export interface CrmObjectDataField {
  id: string;
  name: string;
  key: string;
  type: string;
  is_required: boolean;
  options: string[];
  status: number;
}

export interface CrmObjectDataRecord {
  id: string;
  object_id: string;
  business_id: string | null;
  values: Record<string, unknown>;
  status: number;
  created_at: string | null;
  updated_at: string | null;
}

export interface CrmRecordPagination {
  page: number;
  limit: number;
  total: number;
  total_pages: number;
  has_prev: boolean;
  has_next: boolean;
}

export interface CrmRecordSort {
  field: string;
  direction: 'asc' | 'desc';
}

export interface CrmObjectDataListResponse {
  object_id: string;
  business_id: string | null;
  fields: CrmObjectDataField[];
  items: CrmObjectDataRecord[];
  pagination: CrmRecordPagination;
  sort: CrmRecordSort;
  search: string;
}

export interface CreateObjectDataPayload {
  values: Record<string, unknown>;
}

export interface ExportObjectDataResponse {
  file_name: string;
  mime_type: string;
  content: string;
  total_records: number;
}

export interface CrmObjectListView {
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

export interface CrmObjectListViewListResponse {
  object_id: string;
  business_id: string | null;
  default_view_id: string | null;
  items: CrmObjectListView[];
}

export interface CreateObjectListViewPayload {
  businessId?: string;
  name?: string;
  visibleFieldIds?: string[];
}

export interface UpdateObjectListViewPayload {
  businessId?: string;
  name?: string;
  visibleFieldIds?: string[];
  isDefault?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ObjectRecordService {
  private readonly TOKEN_KEY = 'auth_token';
  private readonly API_BASE_URL = 'http://localhost:3000/api/v1';

  constructor(
    private readonly http: HttpClient,
    private readonly storage: StorageService,
  ) {}

  listRecords(
    objectId: string,
    options?: {
      businessId?: string;
      search?: string;
      page?: number;
      limit?: number;
      sortField?: string;
      sortDirection?: 'asc' | 'desc';
    },
  ): Observable<ApiResponse<CrmObjectDataListResponse>> {
    const headers = this.getAuthHeaders();
    const params = this.buildListParams(options);

    return this.http.get<ApiResponse<CrmObjectDataListResponse>>(
      `${this.API_BASE_URL}/objects/${objectId}/records`,
      {
        headers: headers ?? undefined,
        params,
      },
    );
  }

  createRecord(
    objectId: string,
    payload: CreateObjectDataPayload,
    businessId: string = 'default',
  ): Observable<ApiResponse<{ record: CrmObjectDataRecord }>> {
    const headers = this.getAuthHeaders();
    const body = {
      ...payload,
      ...(businessId !== 'default' ? { business_id: businessId } : {}),
    };

    return this.http.post<ApiResponse<{ record: CrmObjectDataRecord }>>(
      `${this.API_BASE_URL}/objects/${objectId}/records`,
      body,
      {
        headers: headers ?? undefined,
      },
    );
  }

  exportRecords(
    objectId: string,
    options?: {
      businessId?: string;
      search?: string;
      sortField?: string;
      sortDirection?: 'asc' | 'desc';
    },
  ): Observable<ApiResponse<ExportObjectDataResponse>> {
    const headers = this.getAuthHeaders();
    const params = this.buildExportParams(options);

    return this.http.get<ApiResponse<ExportObjectDataResponse>>(
      `${this.API_BASE_URL}/objects/${objectId}/records/export`,
      {
        headers: headers ?? undefined,
        params,
      },
    );
  }

  listViews(
    objectId: string,
    options?: {
      businessId?: string;
    },
  ): Observable<ApiResponse<CrmObjectListViewListResponse>> {
    const headers = this.getAuthHeaders();
    const params = this.buildBusinessScopeParams(options?.businessId);

    return this.http.get<ApiResponse<CrmObjectListViewListResponse>>(
      `${this.API_BASE_URL}/objects/${objectId}/records/views`,
      {
        headers: headers ?? undefined,
        params,
      },
    );
  }

  createListView(
    objectId: string,
    payload: CreateObjectListViewPayload,
  ): Observable<ApiResponse<{ view: CrmObjectListView }>> {
    const headers = this.getAuthHeaders();
    const body = this.buildListViewPayloadBody(payload);

    return this.http.post<ApiResponse<{ view: CrmObjectListView }>>(
      `${this.API_BASE_URL}/objects/${objectId}/records/views`,
      body,
      {
        headers: headers ?? undefined,
      },
    );
  }

  updateListView(
    objectId: string,
    viewId: string,
    payload: UpdateObjectListViewPayload,
  ): Observable<ApiResponse<{ view: CrmObjectListView }>> {
    const headers = this.getAuthHeaders();
    const body = this.buildListViewPayloadBody(payload);
    if (typeof payload.isDefault === 'boolean') {
      body.is_default = payload.isDefault;
    }

    return this.http.patch<ApiResponse<{ view: CrmObjectListView }>>(
      `${this.API_BASE_URL}/objects/${objectId}/records/views/${viewId}`,
      body,
      {
        headers: headers ?? undefined,
      },
    );
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

  private buildListParams(options?: {
    businessId?: string;
    search?: string;
    page?: number;
    limit?: number;
    sortField?: string;
    sortDirection?: 'asc' | 'desc';
  }): HttpParams {
    let params = new HttpParams();
    const businessId = options?.businessId;
    if (businessId && businessId !== 'default') {
      params = params.set('business_id', businessId);
    }

    const search = String(options?.search || '').trim();
    if (search) {
      params = params.set('search', search);
    }

    if (options?.page && options.page > 0) {
      params = params.set('page', String(Math.trunc(options.page)));
    }

    if (options?.limit && options.limit > 0) {
      params = params.set('limit', String(Math.trunc(options.limit)));
    }

    const sortField = String(options?.sortField || '').trim();
    if (sortField) {
      params = params.set('sort_field', sortField);
    }

    const sortDirection = String(options?.sortDirection || '').trim().toLowerCase();
    if (sortDirection === 'asc' || sortDirection === 'desc') {
      params = params.set('sort_direction', sortDirection);
    }

    return params;
  }

  private buildExportParams(options?: {
    businessId?: string;
    search?: string;
    sortField?: string;
    sortDirection?: 'asc' | 'desc';
  }): HttpParams {
    let params = new HttpParams();
    const businessId = options?.businessId;
    if (businessId && businessId !== 'default') {
      params = params.set('business_id', businessId);
    }

    const search = String(options?.search || '').trim();
    if (search) {
      params = params.set('search', search);
    }

    const sortField = String(options?.sortField || '').trim();
    if (sortField) {
      params = params.set('sort_field', sortField);
    }

    const sortDirection = String(options?.sortDirection || '').trim().toLowerCase();
    if (sortDirection === 'asc' || sortDirection === 'desc') {
      params = params.set('sort_direction', sortDirection);
    }

    return params;
  }

  private buildBusinessScopeParams(businessId?: string): HttpParams {
    let params = new HttpParams();
    if (businessId && businessId !== 'default') {
      params = params.set('business_id', businessId);
    }
    return params;
  }

  private buildListViewPayloadBody(
    payload: CreateObjectListViewPayload | UpdateObjectListViewPayload,
  ): {
    business_id?: string;
    name?: string;
    visible_field_ids?: string[];
    is_default?: boolean;
  } {
    const body: {
      business_id?: string;
      name?: string;
      visible_field_ids?: string[];
      is_default?: boolean;
    } = {};

    if (payload.businessId && payload.businessId !== 'default') {
      body.business_id = payload.businessId;
    }

    const name = String(payload.name || '').trim();
    if (name) {
      body.name = name;
    }

    if (Array.isArray(payload.visibleFieldIds)) {
      const visibleFieldIds = Array.from(
        new Set(
          payload.visibleFieldIds
            .map((fieldId) => String(fieldId || '').trim())
            .filter((fieldId) => fieldId.length > 0),
        ),
      );
      body.visible_field_ids = visibleFieldIds;
    }

    return body;
  }
}
