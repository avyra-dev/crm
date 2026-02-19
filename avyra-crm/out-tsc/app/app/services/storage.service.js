import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as i0 from "@angular/core";
export class StorageService {
    isBrowser;
    constructor(platformId) {
        this.isBrowser = isPlatformBrowser(platformId);
    }
    getItem(key) {
        if (!this.isBrowser)
            return null;
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    }
    setItem(key, value) {
        if (!this.isBrowser)
            return;
        localStorage.setItem(key, JSON.stringify(value));
    }
    removeItem(key) {
        if (!this.isBrowser)
            return;
        localStorage.removeItem(key);
    }
    clear() {
        if (!this.isBrowser)
            return;
        localStorage.clear();
    }
    static ɵfac = function StorageService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || StorageService)(i0.ɵɵinject(PLATFORM_ID)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: StorageService, factory: StorageService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StorageService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: Object, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }], null); })();
