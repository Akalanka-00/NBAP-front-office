import { Routes } from '@angular/router';
import { UserOverviewComponent } from '../app-widgets/dashboard-widgets/user/user-overview/user-overview.component';
import { AdminOverviewComponent } from '../app-widgets/dashboard-widgets/admin/admin-overview/admin-overview.component';


export const dashboardroutes: Routes = [
     {path: 'user/dashboard', component: UserOverviewComponent},

    // {path: 'projects', component: ProjectsContainerComponent },
    // {path:'projects/new', component: ProjectCreationContainerComponent},
    // {path:'projects/view/:id', component: ProjectViewContainerComponent},
    // {path:'projects/edit/:id', component: ProjectCreationContainerComponent},
    
    // {path:'gallery', component: GalleryContainerComponent},

    {path: 'admin/dashboard', component: AdminOverviewComponent},


];

