import { Routes } from '@angular/router';

import { dashboardroutes } from './dashboard.routes';
import { AuthActivateRouteGuard } from '../app-services/routegurd-services/auth.routegurd';
import { AppSignupComponent } from '../app-widgets/auth-widgets/app-signup/app-signup.component';
import { AppSigninComponent } from '../app-widgets/auth-widgets/app-signin/app-signin.component';

export const routes: Routes = [
    {path: 'register', component:AppSignupComponent},
    {path: 'login', component:AppSigninComponent},
    {path: 'secure', redirectTo: 'secure/dashboard', pathMatch: 'full'},
    // {path: 'secure',  component: DashboardComponent, children: dashboardroutes, canActivate: [AuthActivateRouteGuard]},
    // {path: 'unauthorized', component: UnauthorizedAccessComponent}
];
