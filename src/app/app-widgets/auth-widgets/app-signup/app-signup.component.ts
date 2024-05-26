import { Component, inject } from '@angular/core';
import { UserStatus, UserTypes } from '../../../app-constants/enum/user.enum';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserSignUpModel } from '../../../app-constants/interface/user.interface';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthAPIService } from '../../../app-services/api-services/auth-api.service';
import { BaseWidgetDirective } from '../../../app-utils/base-widget/base-widget.directive';


@Component({
  selector: 'app-app-signup',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule],
  providers: [Router],
  templateUrl: './app-signup.component.html',
  styleUrl: './app-signup.component.scss', 
})


export class AppSignupComponent extends BaseWidgetDirective{

  

  public signUpForm = new FormGroup({
    fname: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z ]*")]),
    lname: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z ]*")]),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$")]),
    password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[!@#$%^&*()_+}{":;\'?/>.<,])(?!.*\\s).{8,16}$')]),
    confirmPassword: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[!@#$%^&*()_+}{":;\'?/>.<,])(?!.*\\s).{8,16}$')])
  });

  constructor(private router: Router,  private authService: AuthAPIService){
    super(inject(HotToastService));
  }

  public onSubmit(event: Event){
    console.log("cleicked")
    event.preventDefault();
    if( this.validator(this.signUpForm)){
       const formData: UserSignUpModel = {
        fname: this.signUpForm.value.fname ?? '',
        lname: this.signUpForm.value.lname ?? '',
        email: this.signUpForm.value.email ?? '',
        password: this.signUpForm.value.password ?? '',
        
       };
       this.authService.signUpUser(formData);
    }
    // console.log(this.signUpForm.value);
    // this.formData.createdAt = new Date();
    // this.formData.status = UserStatus.pending;
    // console.log(this.formData);
    // this.router.navigate(['/profiling']);

  }

  public handleLoginClick(){
    this.router.navigate(['/login']);
   }

   

}
