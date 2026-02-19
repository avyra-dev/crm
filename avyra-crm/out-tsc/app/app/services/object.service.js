import { Injectable, signal } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { tap } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./storage.service";
export class ObjectService {
    http;
    storage;
    TOKEN_KEY = 'auth_token';
    API_BASE_URL = 'http://localhost:3000/api/v1';
    objects = signal([], ...(ngDevMode ? [{ debugName: "objects" }] : []));
    isLoading = signal(false, ...(ngDevMode ? [{ debugName: "isLoading" }] : []));
    constructor(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    loadObjects(businessId = 'default') {
        const headers = this.getAuthHeaders();
        if (!headers) {
            this.isLoading.set(false);
            this.objects.set([]);
            return;
        }
        const params = this.buildContextParams(businessId);
        this.isLoading.set(true);
        this.http
            .get(`${this.API_BASE_URL}/objects`, {
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
    createObject(payload, businessId = 'default') {
        const headers = this.getAuthHeaders();
        const body = {
            ...payload,
            ...(businessId !== 'default' ? { business_id: businessId } : {}),
        };
        return this.http
            .post(`${this.API_BASE_URL}/objects`, body, {
            headers: headers ?? undefined,
        })
            .pipe(tap((response) => {
            if (response.status) {
                this.loadObjects(businessId);
            }
        }));
    }
    fetchUserObjects() {
        const headers = this.getAuthHeaders();
        const params = new HttpParams().set('include_mapped', '1');
        return this.http.get(`${this.API_BASE_URL}/objects`, {
            headers: headers ?? undefined,
            params,
        });
    }
    mapObjectToBusiness(objectId, targetBusinessId, currentBusinessId = 'default') {
        const headers = this.getAuthHeaders();
        return this.http
            .post(`${this.API_BASE_URL}/objects/${objectId}/businesses`, { business_id: targetBusinessId }, {
            headers: headers ?? undefined,
        })
            .pipe(tap((response) => {
            if (response.status) {
                this.loadObjects(currentBusinessId);
            }
        }));
    }
    deleteObject(objectId, businessId = 'default') {
        const headers = this.getAuthHeaders();
        return this.http
            .delete(`${this.API_BASE_URL}/objects/${objectId}`, {
            headers: headers ?? undefined,
        })
            .pipe(tap((response) => {
            if (response.status) {
                this.loadObjects(businessId);
            }
        }));
    }
    clearState() {
        this.isLoading.set(false);
        this.objects.set([]);
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
    buildContextParams(businessId) {
        let params = new HttpParams();
        if (businessId && businessId !== 'default') {
            params = params.set('business_id', businessId);
        }
        return params;
    }
    static ɵfac = function ObjectService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ObjectService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.StorageService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ObjectService, factory: ObjectService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ObjectService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i1.HttpClient }, { type: i2.StorageService }], null); })();
