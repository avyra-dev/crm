import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from './storage.service';

export interface User {
    id: string;
    name: string;
    email: string;
    role: 'Admin';
    avatar?: string;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private readonly USER_KEY = 'auth_user';
    currentUser = signal<User | null>(null);

    constructor(private storage: StorageService, private router: Router) {
        this.loadUser();
    }

    private loadUser() {
        const user = this.storage.getItem<User>(this.USER_KEY);
        if (user) {
            this.currentUser.set(user);
        }
    }

    login(email: string, password: string): boolean {
        // Mock login logic
        if (email && password) {
            const user: User = {
                id: 'u-123',
                name: 'Arun Balaji', // Defaulting to user name for immersion
                email: email,
                role: 'Admin',
                avatar: 'https://ui-avatars.com/api/?name=Arun+Balaji&background=0D8ABC&color=fff'
            };
            this.storage.setItem(this.USER_KEY, user);
            this.currentUser.set(user);
            this.router.navigate(['/dashboard']);
            return true;
        }
        return false;
    }

    logout() {
        this.storage.removeItem(this.USER_KEY);
        this.currentUser.set(null);
        this.router.navigate(['/login']);
    }

    isAuthenticated(): boolean {
        return !!this.currentUser();
    }
}
