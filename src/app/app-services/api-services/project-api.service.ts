import { Injectable, inject } from "@angular/core";
import { BaseApiService } from "./base-api.service";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { ApiEndpoints } from "../../app-constants/enum/api.enum";
import { ProjectFormModel } from "../../app-constants/interface/project.interface";
import { HotToastService } from "@ngneat/hot-toast";


@Injectable({
    providedIn: 'root'
  })
  export class ProjectAPIService  {
    private apiService = new BaseApiService(inject(HttpClient));

  constructor(private router: Router, private toast: HotToastService) {}

  public  getProjects() {
     return this.apiService.get(ApiEndpoints.fetchProjects);
  }

  public  getProject(id: string) {
    return this.apiService.get(ApiEndpoints.fetchProject, id);
 }

  public  newProject(data: ProjectFormModel) {
    return this.apiService.post(ApiEndpoints.newProject, data).subscribe(
      res =>{
        console.log(res);
        this.apiService.postErrorHandler(res);
        this.toast.success(`${data.name} created successfully`);
      }
    )
  }

  }