import { Routes } from '@angular/router';
import { DashboardContainerComponent } from '../app-widgets/app-dashboard-widgets/dashboard-container/dashboard-container.component';
import { ProjectsContainerComponent } from '../app-widgets/app-dashboard-widgets/projects-container/projects-container.component';
import { ProjectCreationContainerComponent } from '../app-widgets/app-dashboard-widgets/project-creation-container/project-creation-container.component';
import { GalleryContainerComponent } from '../app-widgets/app-dashboard-widgets/gallery-container/gallery-container.component';

export const dashboardroutes: Routes = [
    {path: 'dashboard', component: DashboardContainerComponent},
    {path: 'projects', component: ProjectsContainerComponent },
    {path:'projects/new', component: ProjectCreationContainerComponent},
    {path:'gallery', component: GalleryContainerComponent},

];