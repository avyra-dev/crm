import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "./storage.service";
import * as i2 from "@angular/common/http";
export class ThemeService {
    storage;
    http;
    document;
    STORAGE_KEY = 'crm_theme';
    TOKEN_KEY = 'auth_token';
    API_BASE_URL = 'http://localhost:3000/api/v1';
    isBrowser;
    defaultTheme = {
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
    cssVarMap = {
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
    theme = signal({ ...this.defaultTheme }, ...(ngDevMode ? [{ debugName: "theme" }] : []));
    constructor(storage, http, platformId, document) {
        this.storage = storage;
        this.http = http;
        this.document = document;
        this.isBrowser = isPlatformBrowser(platformId);
    }
    initTheme() {
        const storedTheme = this.storage.getItem(this.STORAGE_KEY);
        const nextTheme = this.normalizeTheme(storedTheme);
        if (storedTheme) {
            this.storage.setItem(this.STORAGE_KEY, nextTheme);
        }
        this.applyTheme(nextTheme);
        this.theme.set(nextTheme);
        this.syncThemeFromBackend('default');
        return nextTheme;
    }
    updateTheme(partialTheme) {
        const nextTheme = this.normalizeTheme({
            ...this.theme(),
            ...partialTheme,
        });
        this.storage.setItem(this.STORAGE_KEY, nextTheme);
        this.applyTheme(nextTheme);
        this.theme.set(nextTheme);
        return nextTheme;
    }
    resetTheme() {
        this.storage.removeItem(this.STORAGE_KEY);
        this.applyTheme(this.defaultTheme);
        this.theme.set({ ...this.defaultTheme });
        return { ...this.defaultTheme };
    }
    getDefaultTheme() {
        return { ...this.defaultTheme };
    }
    syncDefaultThemeFromBackend() {
        this.syncThemeFromBackend('default');
    }
    syncThemeFromBackend(businessId = 'default') {
        const token = this.storage.getItem(this.TOKEN_KEY);
        if (!token) {
            return;
        }
        const normalizedBusinessId = this.normalizeBusinessId(businessId);
        let params = new HttpParams();
        if (normalizedBusinessId) {
            params = params.set('business_id', normalizedBusinessId);
        }
        this.http
            .get(`${this.API_BASE_URL}/business-themes/default`, {
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
    saveDefaultTheme(theme) {
        this.saveTheme(theme, 'default');
    }
    saveTheme(theme, businessId = 'default') {
        const token = this.storage.getItem(this.TOKEN_KEY);
        if (!token) {
            return;
        }
        const normalizedTheme = this.normalizeTheme(theme);
        const normalizedBusinessId = this.normalizeBusinessId(businessId);
        this.http
            .post(`${this.API_BASE_URL}/business-themes/default`, {
            name: 'default',
            ...(normalizedBusinessId ? { business_id: normalizedBusinessId } : {}),
            theme: normalizedTheme,
        }, {
            headers: this.getAuthHeaders(token),
        })
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
    normalizeBusinessId(businessId) {
        if (!businessId || businessId === 'default') {
            return null;
        }
        return businessId;
    }
    normalizeTheme(theme) {
        const normalized = {};
        Object.keys(this.defaultTheme).forEach((key) => {
            normalized[key] = this.resolveColor(theme?.[key], this.defaultTheme[key]);
        });
        return normalized;
    }
    getAuthHeaders(token) {
        return new HttpHeaders({
            Authorization: `Bearer ${token}`,
        });
    }
    applyTheme(theme) {
        if (!this.isBrowser) {
            return;
        }
        const root = this.document.documentElement;
        Object.keys(this.cssVarMap).forEach((key) => {
            root.style.setProperty(this.cssVarMap[key], theme[key]);
        });
    }
    resolveColor(value, fallback) {
        if (typeof value !== 'string') {
            return fallback;
        }
        const color = value.trim();
        if (!color) {
            return fallback;
        }
        return this.isColorValue(color) ? color : fallback;
    }
    isColorValue(color) {
        if (this.isBrowser && typeof CSS !== 'undefined' && CSS.supports('color', color)) {
            return true;
        }
        return /^#(?:[0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$/.test(color);
    }
    static ɵfac = function ThemeService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ThemeService)(i0.ɵɵinject(i1.StorageService), i0.ɵɵinject(i2.HttpClient), i0.ɵɵinject(PLATFORM_ID), i0.ɵɵinject(DOCUMENT)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ThemeService, factory: ThemeService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ThemeService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i1.StorageService }, { type: i2.HttpClient }, { type: undefined, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }, { type: Document, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }], null); })();
