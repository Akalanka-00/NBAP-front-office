import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BaseWidgetDirective } from '../../../../app-utils/base-widget/base-widget.directive';
import { HotToastService } from '@ngneat/hot-toast';
import { ProjectAPIService } from '../../../../app-services/api-services/project-api.service';
import { ProjectFormModel, ProjectResponseModel } from '../../../../app-constants/interface/project.interface';
import { EmptyDataWidgetComponent } from '../../../common-widgets/empty-data-widget/empty-data-widget.component';
import { CommonModule } from '@angular/common';
import { FileService } from '../../../../app-utils/utils/file-service';

@Component({
  selector: 'app-projects-container',
  standalone: true,
  imports: [EmptyDataWidgetComponent, CommonModule,],
  providers: [Router],
  templateUrl: './projects-container.component.html',
  styleUrl: './projects-container.component.scss'
})
export class ProjectsContainerComponent extends BaseWidgetDirective{

  public projects: ProjectResponseModel[] = [];
  protected projectHeaderDescriptionLength: number = 300;
  protected bannerLength: number = 20;

  constructor(private router: Router, private apiService: ProjectAPIService, protected fileService: FileService) {
    super(inject(HotToastService));
  }  

  public override onInit(): void {
    const data = this.apiService.getProjects().subscribe(
      response =>{
        if(response.status !=200){
          this.toastError(response.body);
          throw new Error(String(response.body));
        }
        this.projects = response.body;
      }
    );
  }

  protected viewProject(id: string) {
    this.router.navigate(['secure/projects/view', id]);
  }

  protected editProject(id: string) {
    this.router.navigate(['secure/projects/edit', id]);
  }
  
  protected createProject() {

    this.router.navigate(['secure/projects/new']);
  }

}
