import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './shared/components/layouts/auth-layout-component/auth-layout-component';
import { LoginComponent } from './shared/pages/auth/login/login.component';
import { RegisterComponent } from './shared/pages/auth/register/register.component';
import { DashboardPage } from './shared/pages/loggedin/dashboard-page/dashboard-page';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    }, {
        path: 'register',
        component: RegisterComponent
    }, {
        path: '',
        component: AuthLayoutComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardPage
            }
        ]
    }];
