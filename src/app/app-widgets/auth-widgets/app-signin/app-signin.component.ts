import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthAPIService } from '../../../app-services/api-services/auth-api.service';
import { HotToastService } from '@ngneat/hot-toast';
import { UserModel, UserSignInModel } from '../../../app-constants/interface/user.interface';
import { BaseWidgetDirective } from '../../../app-utils/base-widget/base-widget.directive';

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
