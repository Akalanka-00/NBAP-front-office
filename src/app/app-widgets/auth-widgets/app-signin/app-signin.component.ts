import { Component } from '@angular/core';
import { AppFloatingInputComponent } from '../../common-widgets/app-floating-input/app-floating-input.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserSignUpModel } from '../../../app-constants/interface/user.interface';
import { UserStatus, UserTypes } from '../../../app-constants/enum/user.enum';

@Component({
  selector: 'app-app-signin',
  standalone: true,
  imports: [AppFloatingInputComponent, CommonModule, ReactiveFormsModule],
  providers: [Router],
  templateUrl: './app-signin.component.html',
  styleUrl: './app-signin.component.scss'
})
export class AppSigninComponent {

  formData: UserSignUpModel ={
    id: 0,
    fname: '',
    lname: '',
    email: '',
    password: '',
    status: '',
    createdAt: new Date(),
    type: UserTypes.user,
  };
  public confirmPassword: string = '';


  public fnameErr: string = '';
  public lnameErr: string = '';
  public emailErr: string = '';
  public passwordErr: string = '';
  public confirmPasswordErr: string = '';

  constructor(private router: Router){}

  public onSubmit(event: Event){
    event.preventDefault();
    this.formData.createdAt = new Date();
    this.formData.status = UserStatus.pending;
    console.log(this.formData);
  }

  public handleLoginClick(){
    this.router.navigate(['/register']);
   }

}
