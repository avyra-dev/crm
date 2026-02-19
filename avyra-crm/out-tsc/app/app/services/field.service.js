import { Injectable, signal } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { tap } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./storage.service";
export class FieldService {
    http;
    storage;
    TOKEN_KEY = 'auth_token';
    API_BASE_URL = 'http://localhost:3000/api/v1';
    fields = signal([], ...(ngDevMode ? [{ debugName: "fields" }] : []));
    isLoading = signal(false, ...(ngDevMode ? [{ debugName: "isLoading" }] : []));
    constructor(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    loadFields(businessId = 'default', objectId) {
        const headers = this.getAuthHeaders();
        if (!headers) {
            this.isLoading.set(false);
            this.fields.set([]);
            return;
        }
        const params = this.buildContextParams(businessId, objectId);
        this.isLoading.set(true);
        this.http
            .get(`${this.API_BASE_URL}/fields`, {
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
    createField(payload, businessId = 'default', objectId, refreshContext) {
        const headers = this.getAuthHeaders();
        const body = {
            ...payload,
            ...(objectId ? { object_id: objectId } : {}),
            ...(businessId !== 'default' ? { business_id: businessId } : {}),
        };
        return this.http
            .post(`${this.API_BASE_URL}/fields`, body, {
            headers: headers ?? undefined,
        })
            .pipe(tap((response) => {
            if (response.status) {
                this.loadFields(refreshContext?.businessId ?? businessId, refreshContext?.objectId ?? objectId);
            }
        }));
    }
    mapFieldToObject(fieldId, objectId, businessId = 'default', refreshContext) {
        const headers = this.getAuthHeaders();
        const body = {
            object_id: objectId,
            ...(businessId !== 'default' ? { business_id: businessId } : {}),
        };
        return this.http
            .post(`${this.API_BASE_URL}/fields/${fieldId}/objects`, body, {
            headers: headers ?? undefined,
        })
            .pipe(tap((response) => {
            if (response.status) {
                this.loadFields(refreshContext?.businessId ?? 'default', refreshContext?.objectId);
            }
        }));
    }
    deleteField(fieldId, refreshContext) {
        const headers = this.getAuthHeaders();
        return this.http
            .delete(`${this.API_BASE_URL}/fields/${fieldId}`, {
            headers: headers ?? undefined,
        })
            .pipe(tap((response) => {
            if (response.status) {
                this.loadFields(refreshContext?.businessId ?? 'default', refreshContext?.objectId);
            }
        }));
    }
    unmapFieldFromObject(fieldId, objectId, businessId = 'default', refreshContext) {
        const headers = this.getAuthHeaders();
        let params = new HttpParams();
        if (businessId && businessId !== 'default') {
            params = params.set('business_id', businessId);
        }
        return this.http
            .delete(`${this.API_BASE_URL}/fields/${fieldId}/objects/${objectId}`, {
            headers: headers ?? undefined,
            params,
        })
            .pipe(tap((response) => {
            if (response.status) {
                this.loadFields(refreshContext?.businessId ?? businessId, refreshContext?.objectId ?? objectId);
            }
        }));
    }
    fetchUserFields() {
        const headers = this.getAuthHeaders();
        return this.http.get(`${this.API_BASE_URL}/fields`, {
            headers: headers ?? undefined,
        });
    }
    clearState() {
        this.isLoading.set(false);
        this.fields.set([]);
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
    buildContextParams(businessId, objectId) {
        let params = new HttpParams();
        if (businessId && businessId !== 'default') {
            params = params.set('business_id', businessId);
        }
        if (objectId) {
            params = params.set('object_id', objectId);
        }
        return params;
    }
    static ɵfac = function FieldService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || FieldService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.StorageService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FieldService, factory: FieldService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FieldService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i1.HttpClient }, { type: i2.StorageService }], null); })();
