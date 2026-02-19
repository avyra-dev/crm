import { Injectable, signal } from '@angular/core';
import { tap } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "./storage.service";
import * as i2 from "@angular/router";
import * as i3 from "@angular/common/http";
import * as i4 from "./theme.service";
import * as i5 from "./business.service";
import * as i6 from "./object.service";
import * as i7 from "./field.service";
export class AuthService {
    storage;
    router;
    http;
    themeService;
    businessService;
    objectService;
    fieldService;
    USER_KEY = 'auth_user';
    TOKEN_KEY = 'auth_token';
    API_BASE_URL = 'http://localhost:3000/api/v1';
    currentUser = signal(null, ...(ngDevMode ? [{ debugName: "currentUser" }] : []));
    constructor(storage, router, http, themeService, businessService, objectService, fieldService) {
        this.storage = storage;
        this.router = router;
        this.http = http;
        this.themeService = themeService;
        this.businessService = businessService;
        this.objectService = objectService;
        this.fieldService = fieldService;
        this.loadUser();
    }
    loadUser() {
        const user = this.storage.getItem(this.USER_KEY);
        if (user) {
            this.currentUser.set(user);
        }
    }
    requestOtp(phone_number) {
        return this.http.post(`${this.API_BASE_URL}/users/otp`, { phone_number });
    }
    verifyOtp(phone_number, otp) {
        return this.http
            .post(`${this.API_BASE_URL}/users/otp/verify`, { phone_number, otp })
            .pipe(tap((response) => {
            if (response.status && response.data?.token && response.data?.user) {
                this.setSession(response.data.token, response.data.user);
                this.themeService.syncDefaultThemeFromBackend();
                this.router.navigate(['/dashboard']);
            }
        }));
    }
    setSession(token, user) {
        const hydratedUser = {
            ...user,
            avatar: user.avatar || this.generateAvatar(user.name || user.phone_number),
            role: user.role ?? 'Admin',
        };
        this.storage.setItem(this.TOKEN_KEY, token);
        this.storage.setItem(this.USER_KEY, hydratedUser);
        this.currentUser.set(hydratedUser);
    }
    getToken() {
        return this.storage.getItem(this.TOKEN_KEY);
    }
    logout() {
        this.storage.removeItem(this.TOKEN_KEY);
        this.storage.removeItem(this.USER_KEY);
        this.businessService.clearState();
        this.objectService.clearState();
        this.fieldService.clearState();
        this.themeService.resetTheme();
        this.currentUser.set(null);
        this.router.navigate(['/login']);
    }
    isAuthenticated() {
        return !!this.currentUser();
    }
    generateAvatar(label) {
        const safe = encodeURIComponent(label);
        return `https://ui-avatars.com/api/?name=${safe}&background=0D8ABC&color=fff`;
    }
    static ɵfac = function AuthService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || AuthService)(i0.ɵɵinject(i1.StorageService), i0.ɵɵinject(i2.Router), i0.ɵɵinject(i3.HttpClient), i0.ɵɵinject(i4.ThemeService), i0.ɵɵinject(i5.BusinessService), i0.ɵɵinject(i6.ObjectService), i0.ɵɵinject(i7.FieldService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i1.StorageService }, { type: i2.Router }, { type: i3.HttpClient }, { type: i4.ThemeService }, { type: i5.BusinessService }, { type: i6.ObjectService }, { type: i7.FieldService }], null); })();
