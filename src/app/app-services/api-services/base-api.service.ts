import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})

export class BaseApiService {

  private baseURL: string = 'http://localhost:8080'


  public get(url: string): Observable<HttpResponse<any>>{
    console.log('is secure'+ this.isSecure(url));
    try {
       return this.http.get(this.baseURL+url, { observe: 'response',  withCredentials: this.isSecure(url)});
    } catch (error) {
      console.log(error);
      this.apiError(error);
      throw new Error(String(error));
    }
  }


  public post(url: string, data: any): Observable<HttpResponse<any>>{

    const {formatData, params} = this.excludeFiles(data);
    try {
      return this.http.post(this.baseURL+url, data, { observe: 'response',  withCredentials: this.isSecure(url) });
    } catch (error) {
      console.log(error);
      this.apiError(error);
      throw new Error(String(error));
    }
  }


  public getErrorHandler(response: HttpResponse<Object>){
    if(response.status !=200){
      this.apiError(response.body, response.statusText);
      throw new Error(String(response.body));
    }
  }

  public postErrorHandler(response: HttpResponse<Object>){
    if(response.status !=201){
      this.apiError(response.body, response.statusText);
      throw new Error(String(response.body));
    }
  }

  private apiError(error: any, title: string = "Error Occured.."){

    Swal.fire({
      icon: "error",
      title: title,
      text: JSON.stringify(error),
      // footer: '<a href="#">Why do I have this issue?</a>'
    });
  }

  private isSecure(url: string){
   if(url.includes('secure')){
     return true;
   }
   if(url.includes ('/login')){
     return true;
   }
   return false;
  }

  private excludeFiles<T>(obj: T): any{
    const newObj: Partial<T> = {};
    const params = new FormData();
    let i = false;
    
    for(const key in obj){
      if(obj[key as keyof T] instanceof File || (Array.isArray(obj[key as keyof T]) && (obj[key as keyof T] as File[]).every(item => item instanceof File))){
        params.append(key, obj[key as keyof T] instanceof File? obj[key as keyof T] as File : 
          (Array.isArray(obj[key as keyof T]) && (obj[key as keyof T] as File[]).every(item => item instanceof File))? obj[key as keyof T] as File[] : obj[key as keyof T] as any);
          i=true;
        continue;
      }
      newObj[key] = obj[key];
    }
    return {data: newObj, params: (i? params: null)};
  }

  constructor(protected http: HttpClient) { }
}
