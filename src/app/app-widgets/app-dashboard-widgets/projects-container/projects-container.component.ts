import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BaseWidgetDirective } from '../../../app-utils/base-widget/base-widget.directive';
import { HotToastService } from '@ngneat/hot-toast';
import { ProjectAPIService } from '../../../app-services/api-services/project-api.service';

@Component({
  selector: 'app-projects-container',
  standalone: true,
  imports: [],
  providers: [Router],
  templateUrl: './projects-container.component.html',
  styleUrl: './projects-container.component.scss'
})
export class ProjectsContainerComponent extends BaseWidgetDirective{

  constructor(private router: Router, private apiService: ProjectAPIService) {
    super(inject(HotToastService));
  }  

  public override onInit(): void {
    this.apiService.getProjects();
  }
  
  protected createProject() {

    console.log('new project')
    this.router.navigate(['secure/projects/new']);
  }

}
