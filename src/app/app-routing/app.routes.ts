import { Routes } from '@angular/router';
import { AppSignupComponent } from '../app-widgets/auth-widgets/app-signup/app-signup.component';
import { AppSigninComponent } from '../app-widgets/auth-widgets/app-signin/app-signin.component';
import { DashboardComponent } from '../app-layout/dashboard/dashboard/dashboard.component';
import { dashboardroutes } from './dashboard.routes';

export const routes: Routes = [
    {path: 'register', component:AppSignupComponent},
    {path: 'login', component:AppSigninComponent},
    {path: 'secure', redirectTo: 'secure/dashboard', pathMatch: 'full'},
    {path: 'secure',  component: DashboardComponent, children: dashboardroutes},
];
