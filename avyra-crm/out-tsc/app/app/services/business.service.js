import { Injectable, signal } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./storage.service";
export class BusinessService {
    http;
    storage;
    TOKEN_KEY = 'auth_token';
    SELECTED_BUSINESS_KEY = 'selected_business_id';
    API_BASE_URL = 'http://localhost:3000/api/v1';
    API_ORIGIN = 'http://localhost:3000';
    businesses = signal([], ...(ngDevMode ? [{ debugName: "businesses" }] : []));
    selectedBusinessId = signal('default', ...(ngDevMode ? [{ debugName: "selectedBusinessId" }] : []));
    isLoading = signal(false, ...(ngDevMode ? [{ debugName: "isLoading" }] : []));
    constructor(http, storage) {
        this.http = http;
        this.storage = storage;
        const storedSelection = this.storage.getItem(this.SELECTED_BUSINESS_KEY);
        this.selectedBusinessId.set(storedSelection || 'default');
    }
    loadBusinesses(preferredSelectionId) {
        const headers = this.getAuthHeaders();
        if (!headers) {
            this.businesses.set([]);
            this.setSelectedBusiness('default');
            return;
        }
        this.isLoading.set(true);
        this.http
            .get(`${this.API_BASE_URL}/businesses`, { headers })
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
    createBusiness(payload) {
        const formData = new FormData();
        formData.append('name', payload.name.trim());
        formData.append('type', payload.type.trim());
        formData.append('status', String(payload.status ?? 1));
        if (payload.logo) {
            formData.append('logo', payload.logo);
        }
        const headers = this.getAuthHeaders();
        return this.http
            .post(`${this.API_BASE_URL}/businesses`, formData, {
            headers: headers ?? undefined,
        })
            .pipe(tap((response) => {
            if (response.status && response.data?.id) {
                this.loadBusinesses(response.data.id);
            }
        }));
    }
    setSelectedBusiness(businessId) {
        const resolved = businessId || 'default';
        this.selectedBusinessId.set(resolved);
        this.storage.setItem(this.SELECTED_BUSINESS_KEY, resolved);
    }
    clearState() {
        this.businesses.set([]);
        this.setSelectedBusiness('default');
    }
    selectedBusiness() {
        const selectedId = this.selectedBusinessId();
        if (selectedId === 'default') {
            return null;
        }
        return this.businesses().find((business) => business.id === selectedId) ?? null;
    }
    ensureValidSelection(preferredSelectionId) {
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
    hydrateBusiness(business) {
        return {
            ...business,
            logo_path: this.resolveLogoPath(business.logo_path),
        };
    }
    resolveLogoPath(path) {
        if (!path)
            return null;
        if (/^https?:\/\//i.test(path)) {
            return path;
        }
        return `${this.API_ORIGIN}${path.startsWith('/') ? path : `/${path}`}`;
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
    static ɵfac = function BusinessService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || BusinessService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.StorageService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: BusinessService, factory: BusinessService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BusinessService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i1.HttpClient }, { type: i2.StorageService }], null); })();
