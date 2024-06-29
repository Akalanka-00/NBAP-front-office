import { Injectable, inject } from "@angular/core";
import { BaseApiService } from "./base-api.service";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { ApiEndpoints } from "../../app-constants/enum/api.enum";
import { ProjectFormModel } from "../../app-models/project.model";
import { HotToastService } from "@ngneat/hot-toast";
import {SecureAPIService} from "./SecureAPIService";
import {MessageGroup} from "../../app-constants/enum/app-request/MessageGroup";
import {ProjectMessageType} from "../../app-constants/enum/app-request/messageTypes/ProjectMessageType";
import {catchError} from "rxjs";
import {BaseWidgetDirective} from "../../app-utils/base-widget/base-widget.directive";


@Injectable({
    providedIn: 'root'
  })
  export class ProjectAPIService extends BaseWidgetDirective{
    private apiService = new BaseApiService(inject(HttpClient));
    private secureApiService: SecureAPIService = new SecureAPIService();

  constructor() {
    super();
  }

  public  getProjects() {
     return this.apiService.get(ApiEndpoints.fetchProjects);
  }

  public  getProject(id: string) {
    return this.apiService.get(ApiEndpoints.fetchProject, id);
 }

  public  newProject(data: ProjectFormModel) {

    return  this.secureApiService.secureRequest(MessageGroup.PROJECT, ProjectMessageType.CREATE, data)
      .then((res)=>{
        this.navigate("secure/user/projects").then(()=>{
          this.toastSuccess("Project created successfully")

        })
    })
      .catch((err)=>{
        this.navigate("secure/user/projects").then(()=>{
          this.toastError(err.message)

        })      })


  }

  }
