import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
export const rootRedirectGuard = () => {
    const auth = inject(AuthService);
    const router = inject(Router);
    return auth.isAuthenticated()
        ? router.createUrlTree(['/dashboard'])
        : router.createUrlTree(['/login']);
};
