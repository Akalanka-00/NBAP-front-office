import { Routes } from '@angular/router';
import { DashboardContainerComponent } from '../app-widgets/app-dashboard-widgets/dashboard-container/dashboard-container.component';
import { ProjectsContainerComponent } from '../app-widgets/app-dashboard-widgets/projects-container/projects-container.component';

export const dashboardroutes: Routes = [
    {path: 'dashboard', component: DashboardContainerComponent},
    {path: 'projects', component: ProjectsContainerComponent}

];