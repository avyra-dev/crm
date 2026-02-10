import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class StorageService {
    private isBrowser: boolean;

    constructor(@Inject(PLATFORM_ID) platformId: Object) {
        this.isBrowser = isPlatformBrowser(platformId);
    }

    getItem<T>(key: string): T | null {
        if (!this.isBrowser) return null;
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    }

    setItem(key: string, value: any): void {
        if (!this.isBrowser) return;
        localStorage.setItem(key, JSON.stringify(value));
    }

    removeItem(key: string): void {
        if (!this.isBrowser) return;
        localStorage.removeItem(key);
    }

    clear(): void {
        if (!this.isBrowser) return;
        localStorage.clear();
    }
}
