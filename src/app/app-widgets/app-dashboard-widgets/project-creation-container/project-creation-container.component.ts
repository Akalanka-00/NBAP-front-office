import { ChangeDetectorRef, Component, SimpleChanges, inject } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { CommonModule } from '@angular/common';
import { BaseWidgetDirective } from '../../../app-utils/base-widget/base-widget.directive';
import { HotToastService } from '@ngneat/hot-toast';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProjectFormModel, ReferenceUrl } from '../../../app-constants/interface/project.interface';
import { ProjectAPIService } from '../../../app-services/api-services/project-api.service';
import { FileService } from '../../../app-utils/utils/file-service';




@Component({
  selector: 'app-project-creation-container',
  standalone: true,
  imports: [
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './project-creation-container.component.html',
  styleUrl: './project-creation-container.component.scss'
})




export class ProjectCreationContainerComponent extends BaseWidgetDirective {



  private refereceUrls: ReferenceUrl[] = []

  public detailsForm = new FormGroup({
    projectName: new FormControl('', [Validators.required]),
    projectStartDate: new FormControl(null, [Validators.required]),
    projectEndDate: new FormControl(null, [Validators.required]),
    description: new FormControl('', [Validators.required]),
    isOngoing: new FormControl( false, [Validators.required]),
    canRate: new FormControl( false, [Validators.required]),
    isPrivate: new FormControl( false, [Validators.required]),
  });

  public imageLocalUrlList: string[] = [];
  public bannerLocalUrl: string = '';

  public referenceUrlForm = new FormGroup({
    hostname: new FormControl('', [Validators.required]),
    url: new FormControl('', [Validators.required]),
  });
  public maxDate: string ;

  isLinear = false;

  private imageList: File[] = [];
  private banner: File | null = null;

  private maxFiles = 5;
  private maxFileSize = 8*1024*1024;


  constructor(private http: HttpClient, private cdr: ChangeDetectorRef, private apiService: ProjectAPIService, private fileService: FileService) {
    super(inject(HotToastService));

    const today = new Date();
    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2); // January is 0
    const day = ('0' + today.getDate()).slice(-2);
    this.maxDate = `${year}-${month}-${day}`;
    
  }
  
  public async onSubmit(event: Event){
    event.preventDefault();

    const bannerArrayBuffer = await this.fileService.fileToBase64(this.banner);
    const banner = typeof bannerArrayBuffer === 'string' ? bannerArrayBuffer : new TextDecoder().decode(bannerArrayBuffer);

    const projectData: ProjectFormModel = {
      name: this.detailsForm.value.projectName ?? '',
      banner: banner ?? '',
      startDate: this.detailsForm.value.projectStartDate ?? new Date(),
      endDate: this.detailsForm.value.projectEndDate ?? new Date(),
      description: this.detailsForm.value.description ?? '',
      isOngoing: this.detailsForm.value.isOngoing ?? false,
      canRate: this.detailsForm.value.canRate ?? false,
      isPrivate: this.detailsForm.value.isPrivate ?? false,
      mediaFiles: await Promise.all(this.imageList.map(async file => {
        const base64 = await this.fileService.fileToBase64(file);
        return typeof base64 === 'string' ? base64 : new TextDecoder().decode(base64);
      })),
      referenceUrls: this.getReferenceUrl()
    }

    console.log(projectData);
    this.apiService.newProject(projectData)
  }

  public readFile(file: File ): string {
    if (file) return URL.createObjectURL(file);
    else return '';
  }

  protected getReferenceUrl(): ReferenceUrl[] {
    return this.refereceUrls;
  }

  protected setReferenceUrl(): void {
    const hostname = this.referenceUrlForm.value.hostname || '';
    let url = this.referenceUrlForm.value.url || '';

    if(hostname === '' || url === ''){
      return this.toastError('Please fill all the fields');
    }
    if(url.startsWith('https://')){
      url = url.replace('https://', '');
    }
    if(!url.startsWith('www.')){
      url = `www.${url}`;
    }

    if(this.refereceUrls.find(ref => ref.hostname === hostname)){
      return this.toastError(`${hostname} already exists`);
    }

    if(this.refereceUrls.find(ref => ref.url === url)){
      return this.toastError(`${url} already exists`);
    }
    
    const icon = this.getIcon(url);
    this.refereceUrls.push({hostname, url, icon});
    console.log(this.refereceUrls)

    this.referenceUrlForm.reset();
    this.toastSuccess(`${hostname} added successfully`);
  }

  protected removeReferenceUrl(hostname: string): void {
    const refUrl = this.refereceUrls.find(ref => ref.hostname === hostname);

    Swal.fire({
      title: "Are you sure?",
      text: `Are you sure you want to remove ${refUrl?.hostname}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete"
    }).then((result) => {
      if (result.isConfirmed) {
        this.refereceUrls = this.refereceUrls.filter(ref => ref.hostname !== hostname);
        this.toastSuccess(`${refUrl?.hostname} removed successfully`);
      }
    });
 
  }

  protected setFiles(event: any): void {
    const files: File[] = Array.from(event.target.files);
    console.log(files);
    if(files.length + this.imageList.length > this.maxFiles){
      return this.toastError(`You can select only ${this.maxFiles} files`);
    }
    if(files.find((file: File) => file.size > this.maxFileSize)){
      return this.toastError(`File size should be less than ${this.maxFileSize/1024/1024} MB`);
    }
    this.cdr.detectChanges();
    this.imageList.push(...files);
    for(const file of files){
      this.imageLocalUrlList.push(this.readFile(file));
    }
  }

  protected getFiles(): File[] {
    return this.imageList;
  }

  protected removeFile(file: string): void {
    this.cdr.detectChanges();
    const i = this.imageLocalUrlList.indexOf(file);
    this.imageLocalUrlList = this.imageLocalUrlList.filter(f => f !== file);
    
    this.imageList = this.imageList.splice(i, 1);
  
  }

  protected setBanner(event: any): void {
    const file = event.target.files[0];
    if(file.size > this.maxFileSize){
      return this.toastError(`File size should be less than ${this.maxFileSize/1024/1024} MB`);
    }
    this.banner = file;
    this.bannerLocalUrl = this.readFile(file);
    this.cdr.detectChanges();
    
  }

  protected getBanner(): File | null {
    return this.banner;
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
