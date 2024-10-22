import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, catchError,  throwError } from "rxjs";
import {  SessionStorageKeys } from "../../app-constants/enum/storageKeys.enum";
import { UserModel } from "../../app-models/user.model";
import { HotToastService } from "@ngneat/hot-toast";
import { removeCookie } from 'typescript-cookie';


@Injectable()
export class XhrInterceptor implements HttpInterceptor {

    user!: UserModel;
     constructor(private router: Router, private toast: HotToastService,) {}


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


        let httpHeaders = new HttpHeaders();
        if(sessionStorage.getItem(SessionStorageKeys.CREDENTIALS)){
          this.user = JSON.parse(sessionStorage.getItem(SessionStorageKeys.CREDENTIALS)!);
        }

        const expDate = this.getExpDate(this.user);
        if((this.user && this.user.password !== undefined && this.user.email != undefined && this.user.password !== null)){
            httpHeaders = httpHeaders.append('Authorization', 'Basic ' + window.btoa(this.user.email + ':' + this.user.password));
            httpHeaders = httpHeaders.append('role',window.btoa((this.user.role? this.user.role.role: 'standard') + ':' + expDate));
        }else{
          let auth = sessionStorage.getItem(SessionStorageKeys.AUTHORIZATION);
          if(auth){
            httpHeaders = httpHeaders.append('Authorization', auth);
          }
        }


        let xsrf = sessionStorage.getItem(SessionStorageKeys.XSRF_TOKEN);
        if(xsrf){
          httpHeaders = httpHeaders.append(SessionStorageKeys.XSRF_TOKEN, xsrf);
        }
        httpHeaders = httpHeaders.append('X-Requested-With', 'XMLHttpRequest');
        const xhr = req.clone({
          headers: httpHeaders
        });

        console.log(req)

      return next.handle(xhr).pipe(

        catchError((error: HttpErrorResponse): Observable<any> => {

            if(error.status == 400){
                window.sessionStorage.clear();
                window.localStorage.clear();
                removeCookie(SessionStorageKeys.XSRF_TOKEN);

                this.router.navigate(['login']);
                this.toast.error('Session expired, Please login again');
                return throwError(error);
            }

            if(error.status == 403){
                this.router.navigate(['unauthorized']);
                return throwError(error);

            }

            if(error.status != 401){
              this.toast.error(error.error.error);
            }else{
                // window.sessionStorage.clear();
                // window.localStorage.clear();
                // removeCookie(SessionStorageKeys.XSRF_TOKEN);

                // this.router.navigate(['login']);
              this.toast.error('Invalid user credentials, Please try again latter.');
            }

            return throwError(error);
            }),

        // tap(
        //   (err: any) => {

        //     console.log(err)

        //     Swal.fire({
        //         icon: "error",
        //         title: 'Error Occured',
        //         text: JSON.stringify(JSON.stringify(err)),
        //     });

        //     if (err instanceof HttpErrorResponse) {
        //       if (err.status !== 401) {
        //         return;
        //       }
        //       this.router.navigate(['dashboard']);
        //     }
        //   }),
        );
      }

      private getExpDate(user: UserModel): string{
        if(user && user.role && user.role.role == 'premium' && user.roleExpDate!== null){
          const date = new Date(user.roleExpDate);
          return date.valueOf().toString();
        }
        return 'none';
    }

  }

