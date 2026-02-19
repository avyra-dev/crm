import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./storage.service";
export class ObjectRecordService {
    http;
    storage;
    TOKEN_KEY = 'auth_token';
    API_BASE_URL = 'http://localhost:3000/api/v1';
    constructor(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    listRecords(objectId, options) {
        const headers = this.getAuthHeaders();
        const params = this.buildListParams(options);
        return this.http.get(`${this.API_BASE_URL}/objects/${objectId}/records`, {
            headers: headers ?? undefined,
            params,
        });
    }
    createRecord(objectId, payload, businessId = 'default') {
        const headers = this.getAuthHeaders();
        const body = {
            ...payload,
            ...(businessId !== 'default' ? { business_id: businessId } : {}),
        };
        return this.http.post(`${this.API_BASE_URL}/objects/${objectId}/records`, body, {
            headers: headers ?? undefined,
        });
    }
    exportRecords(objectId, options) {
        const headers = this.getAuthHeaders();
        const params = this.buildExportParams(options);
        return this.http.get(`${this.API_BASE_URL}/objects/${objectId}/records/export`, {
            headers: headers ?? undefined,
            params,
        });
    }
    listViews(objectId, options) {
        const headers = this.getAuthHeaders();
        const params = this.buildBusinessScopeParams(options?.businessId);
        return this.http.get(`${this.API_BASE_URL}/objects/${objectId}/records/views`, {
            headers: headers ?? undefined,
            params,
        });
    }
    createListView(objectId, payload) {
        const headers = this.getAuthHeaders();
        const body = this.buildListViewPayloadBody(payload);
        return this.http.post(`${this.API_BASE_URL}/objects/${objectId}/records/views`, body, {
            headers: headers ?? undefined,
        });
    }
    updateListView(objectId, viewId, payload) {
        const headers = this.getAuthHeaders();
        const body = this.buildListViewPayloadBody(payload);
        if (typeof payload.isDefault === 'boolean') {
            body.is_default = payload.isDefault;
        }
        return this.http.patch(`${this.API_BASE_URL}/objects/${objectId}/records/views/${viewId}`, body, {
            headers: headers ?? undefined,
        });
    }
    getAuthHeaders() {
        const token = this.storage.getItem(this.TOKEN_KEY);
        if (!token) {
            return null;
        }
        return new HttpHeaders({
            Authorization: `Bearer ${token}`,
        });
    }
    buildListParams(options) {
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
    buildExportParams(options) {
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
    buildBusinessScopeParams(businessId) {
        let params = new HttpParams();
        if (businessId && businessId !== 'default') {
            params = params.set('business_id', businessId);
        }
        return params;
    }
    buildListViewPayloadBody(payload) {
        const body = {};
        if (payload.businessId && payload.businessId !== 'default') {
            body.business_id = payload.businessId;
        }
        const name = String(payload.name || '').trim();
        if (name) {
            body.name = name;
        }
        if (Array.isArray(payload.visibleFieldIds)) {
            const visibleFieldIds = Array.from(new Set(payload.visibleFieldIds
                .map((fieldId) => String(fieldId || '').trim())
                .filter((fieldId) => fieldId.length > 0)));
            body.visible_field_ids = visibleFieldIds;
        }
        return body;
    }
    static ɵfac = function ObjectRecordService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ObjectRecordService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.StorageService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ObjectRecordService, factory: ObjectRecordService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ObjectRecordService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i1.HttpClient }, { type: i2.StorageService }], null); })();
