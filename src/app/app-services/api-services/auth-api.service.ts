import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { UserModel, UserSignInModel, UserSignUpModel } from '../../app-constants/interface/user.interface';
import { BaseApiService } from './base-api.service';
import { getCookie } from 'typescript-cookie';
import { LocalStorageKeys, SessionStorageKeys } from '../../app-constants/enum/storageKeys.enum';
import { ApiEndpoints } from '../../app-constants/enum/api.enum';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthAPIService  {


  private user!: UserModel;
  private apiService = new BaseApiService(inject(HttpClient));

  constructor(private router: Router) {}


  public async signUpUser(user: UserSignUpModel) {
    return this.apiService.post(ApiEndpoints.register, user).subscribe(
      res =>{
        this.apiService.postErrorHandler(res);
      }
    )
  }

  public signInUser(loginData: UserSignInModel) {

    window.sessionStorage.setItem(SessionStorageKeys.CREDENTIALS, JSON.stringify(loginData));
    return this.apiService.get(ApiEndpoints.login) .subscribe(
      res => {
        this.apiService.getErrorHandler(res);
        console.log(res);
        window.sessionStorage.setItem(SessionStorageKeys.AUTHORIZATION, res.headers.get(SessionStorageKeys.AUTHORIZATION)!);
        this.user = <any>res.body;
        const xsrf = String(getCookie(SessionStorageKeys.XSRF_TOKEN));
        console.log(res);
        console.log(xsrf);
        window.sessionStorage.setItem(SessionStorageKeys.XSRF_TOKEN, xsrf);
        this.user.authStatus = 'AUTH';
        window.sessionStorage.setItem(SessionStorageKeys.CREDENTIALS, JSON.stringify(this.user));
        this.router.navigate(['/secure/dashboard'])
        
      },

    );

  }
}
