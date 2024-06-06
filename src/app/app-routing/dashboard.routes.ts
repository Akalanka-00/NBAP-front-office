import { Routes } from '@angular/router';
import { UserOverviewComponent } from '../app-widgets/dashboard-widgets/user/user-overview/user-overview.component';
import { AdminOverviewComponent } from '../app-widgets/dashboard-widgets/admin/admin-overview/admin-overview.component';
import { UserProjectOverviewComponent } from '../app-widgets/dashboard-widgets/user/projects/user-project-overview/user-project-overview.component';
import { UserQualificationsComponent } from '../app-widgets/dashboard-widgets/user/qualifications/user-qualifications/user-qualifications.component';
import { UserSkillsComponent } from '../app-widgets/dashboard-widgets/user/skills/user-skills/user-skills.component';


export const dashboardroutes: Routes = [
     {path: 'user/overview', component: UserOverviewComponent},
     {path: 'user/projects', component: UserProjectOverviewComponent },
     {path: 'user/qualifications', component: UserQualificationsComponent },
     {path: 'user/skills', component: UserSkillsComponent },
    // {path:'projects/new', component: ProjectCreationContainerComponent},
    // {path:'projects/view/:id', component: ProjectViewContainerComponent},
    // {path:'projects/edit/:id', component: ProjectCreationContainerComponent},
    
    // {path:'gallery', component: GalleryContainerComponent},

    {path: 'admin/overview', component: AdminOverviewComponent},


];

