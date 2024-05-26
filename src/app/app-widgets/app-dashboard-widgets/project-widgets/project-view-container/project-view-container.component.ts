import { Component, inject } from '@angular/core';
import { BaseWidgetDirective } from '../../../../app-utils/base-widget/base-widget.directive';
import { HotToastService } from '@ngneat/hot-toast';
import { ActivatedRoute } from '@angular/router';
import { ProjectAPIService } from '../../../../app-services/api-services/project-api.service';
import { ProjectResponseModel } from '../../../../app-constants/interface/project.interface';
import { EmptyDataWidgetComponent } from '../../../common-widgets/empty-data-widget/empty-data-widget.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-view-container',
  standalone: true,
  imports: [EmptyDataWidgetComponent, CommonModule],
  templateUrl: './project-view-container.component.html',
  styleUrl: './project-view-container.component.scss'
})
export class ProjectViewContainerComponent extends BaseWidgetDirective{


  public projectId: string = '';
  public project!: ProjectResponseModel;
  constructor(private route: ActivatedRoute, private apiService: ProjectAPIService) {
    super(inject(HotToastService));
  }  

  public override onInit(): void {
    this.projectId = this.route.snapshot.params['id'];
    this.apiService.getProject(this.projectId).subscribe(
      response =>{
        if(response.status !=200){
          this.toastError(response.body);
          throw new Error(String(response.body));
        }
        this.project = response.body;
        this.project.startDate = new Date(this.project.startDate);
        this.project.endDate = new Date(this.project.endDate);
        this.project.referenceUrls.forEach(url => {
          url.icon = this.getIcon(url.url);
        });
  
      }
    );
  }

  public handleFavIconError(url: string): void {
    this.project.referenceUrls.forEach(refUrl => {
      if(refUrl.url === url){
        refUrl.icon = '../../../../../assets/icons/web.png';
      }
    });
  }

  private getIcon(url: string): string {
    const matches = url.match(/^(?:https?:\/\/)?([^/?#]+)/i);
    console.log(matches)
    if (!matches || matches.length < 2) return '';

    const domain ='https://'+ matches[1] + '/favicon.ico';
    console.log(domain)
    return domain ;
  }

}
