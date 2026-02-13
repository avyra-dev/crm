import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './shared/components/layouts/auth-layout-component/auth-layout-component';
import { LoginComponent } from './shared/pages/auth/login/login.component';
import { RegisterComponent } from './shared/pages/auth/register/register.component';
import { DashboardPage } from './shared/pages/loggedin/dashboard-page/dashboard-page';
import { NotFoundPage } from './shared/pages/misc/not-found-page/not-found-page';
import { authGuard } from './guards/auth.guard';
import { guestGuard } from './guards/guest.guard';
// import { rootRedirectGuard } from './guards/root-redirect.guard';

export const routes: Routes = [
    // {
    //     path: '',
    //     pathMatch: 'full',
    //     canActivate: [rootRedirectGuard],
    //     redirectTo: 'dashboard'
    // },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [guestGuard]
    },
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [guestGuard]
    },
    {
        path: '',
        component: AuthLayoutComponent,
        canActivateChild: [authGuard],
        children: [
            {
                path: 'dashboard',
                component: DashboardPage
            }
        ]
    },
    {
        path: '**',
        component: NotFoundPage
    }
];
