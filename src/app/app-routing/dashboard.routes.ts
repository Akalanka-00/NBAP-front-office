import { Routes } from '@angular/router';
import { UserOverviewComponent } from '../app-widgets/dashboard-widgets/user/user-overview/user-overview.component';
import { AdminOverviewComponent } from '../app-widgets/dashboard-widgets/admin/admin-overview/admin-overview.component';
import { UserProjectOverviewComponent } from '../app-widgets/dashboard-widgets/user/projects/user-project-overview/user-project-overview.component';
import { UserQualificationsComponent } from '../app-widgets/dashboard-widgets/user/qualifications/user-qualifications/user-qualifications.component';
import { UserSkillsComponent } from '../app-widgets/dashboard-widgets/user/skills/user-skills/user-skills.component';
import {
  UserStatisticsComponent
} from "../app-widgets/dashboard-widgets/user/statistics/user-statistics/user-statistics.component";
import {
  UserProjectCreateComponent
} from "../app-widgets/dashboard-widgets/user/projects/user-project-create/user-project-create.component";


export const dashboardroutes: Routes = [
    {path: 'user/overview', component: UserOverviewComponent},
    {path: 'user/projects', component: UserProjectOverviewComponent },
    {path: 'user/qualifications', component: UserQualificationsComponent },
    {path: 'user/skills', component: UserSkillsComponent },
    {path: 'user/statistics', component: UserStatisticsComponent },
    {path:'user/projects/new', component: UserProjectCreateComponent},
    {path:'user/projects/edit/:id', component: UserProjectCreateComponent},
    {path:'user/projects/view/:id', component: UserProjectCreateComponent},
    // {path:'projects/view/:id', component: ProjectViewContainerComponent},
    // {path:'projects/edit/:id', component: ProjectCreationContainerComponent},

    // {path:'gallery', component: GalleryContainerComponent},

    {path: 'admin/overview', component: AdminOverviewComponent},


];

