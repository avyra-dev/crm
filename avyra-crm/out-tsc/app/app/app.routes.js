import { AuthLayoutComponent } from './shared/components/layouts/auth-layout-component/auth-layout-component';
import { LoginComponent } from './shared/pages/auth/login/login.component';
import { DashboardPage } from './shared/pages/loggedin/dashboard-page/dashboard-page';
import { ObjectDetailsPage } from './shared/pages/loggedin/object-details-page/object-details-page';
import { ObjectRecordCreatePage } from './shared/pages/loggedin/object-record-create-page/object-record-create-page';
import { SettingsPage } from './shared/pages/loggedin/settings-page/settings-page';
import { NotFoundPage } from './shared/pages/misc/not-found-page/not-found-page';
import { authGuard } from './guards/auth.guard';
import { guestGuard } from './guards/guest.guard';
// import { rootRedirectGuard } from './guards/root-redirect.guard';
export const routes = [
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
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: '',
        component: AuthLayoutComponent,
        canActivateChild: [authGuard],
        children: [
            {
                path: 'dashboard/:objectId/:objectName',
                redirectTo: 'objects/:objectId/:objectName',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                component: DashboardPage
            },
            {
                path: 'objects/:objectId/:objectName/new',
                component: ObjectRecordCreatePage
            },
            {
                path: 'objects/:objectId/:objectName',
                component: ObjectDetailsPage
            },
            {
                path: 'settings',
                component: SettingsPage
            },
            {
                path: 'config',
                redirectTo: 'settings',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '**',
        component: NotFoundPage
    }
];
