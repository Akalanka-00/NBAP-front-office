import { Component } from '@angular/core';
import {BaseWidgetDirective} from "../../../../../app-utils/base-widget/base-widget.directive";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-project-overview',
  standalone: true,
  imports: [],
  templateUrl: './user-project-overview.component.html',
  styleUrl: './user-project-overview.component.scss'
})
export class UserProjectOverviewComponent extends BaseWidgetDirective{


  public constructor() {
    super();
  }

  public onCreateProject() {
    this.navigate('/secure/user/projects/new').then(() => {});
  }

}
