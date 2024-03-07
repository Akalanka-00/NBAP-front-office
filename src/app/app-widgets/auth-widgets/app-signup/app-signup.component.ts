import { Component } from '@angular/core';
import { AppFloatingInputComponent } from '../../common-widgets/app-floating-input/app-floating-input.component';


@Component({
  selector: 'app-app-signup',
  standalone: true,
  imports: [AppFloatingInputComponent],
  templateUrl: './app-signup.component.html',
  styleUrl: './app-signup.component.scss'
})
export class AppSignupComponent {

  public fname: string = '';
  public lname: string = '';
  public email: string = '';
  public password: string = '';

  public fnameErr: string = '';
  public lnameErr: string = '';
  public emailErr: string = '';
  public passwordErr: string = '';

  public onClick(){
    console.log(this.fname);
    console.log(this.lname);
  }

}
