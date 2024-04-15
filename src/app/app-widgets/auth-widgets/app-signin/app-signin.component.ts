import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel, UserSignInModel, UserSignUpModel } from '../../../app-constants/interface/user.interface';
import { UserStatus, UserTypes } from '../../../app-constants/enum/user.enum';
import { AuthAPIService } from '../../../app-services/api-services/auth-api.service';
import { BaseWidgetDirective } from '../../../app-utils/base-widget/base-widget.directive';
import { HotToastService } from '@ngneat/hot-toast';
import { getCookie } from 'typescript-cookie';
import { SessionStorageKeys } from '../../../app-constants/enum/storageKeys.enum';
import { HTTP_INTERCEPTORS, HttpClientXsrfModule } from '@angular/common/http';
import { XhrInterceptor } from '../../../app-utils/interceptors/app-request.interceptors';

@Component({
  selector: 'app-app-signin',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule],
  providers: [Router],
  templateUrl: './app-signin.component.html',
  styleUrl: './app-signin.component.scss'
})
export class AppSigninComponent extends BaseWidgetDirective{

 
  public signInForm = new FormGroup({
   
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$")]),
    password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[!@#$%^&*()_+}{":;\'?/>.<,])(?!.*\\s).{8,16}$')]),
  });

  private user!: UserModel;
  constructor(private router: Router,  private authService: AuthAPIService){
    super(inject(HotToastService));
  }

  public onSubmit(event: Event){
    event.preventDefault();

   if( this.validator(this.signInForm)){
       const formData: UserSignInModel = {
        email: this.signInForm.value.email ?? '',
        password: this.signInForm.value.password ?? '',
       };
       this.authService.signInUser(formData)
    }
  }

  public handleLoginClick(){
    this.router.navigate(['/register']);
   }


}
