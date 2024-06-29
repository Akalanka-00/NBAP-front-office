import {AfterViewInit, Directive, inject, Injector, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import {Router} from "@angular/router";

@Directive({
  selector: '[appBaseWidget]',
  standalone: true
})
export class BaseWidgetDirective implements OnChanges, OnInit, OnDestroy, AfterViewInit{

  private toast: HotToastService = inject(HotToastService);
  public router:Router = inject(Router);

  public constructor() { }

  public delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


  public ngOnChanges(changes: SimpleChanges): void {
		this.onChanges(changes);
  }
  public ngOnInit(): void {
		this.onInit();
  }
  public ngOnDestroy(): void {
		this.onDestroy();
  }

  public ngAfterViewInit(): void {
    this.afterViewInit();
  }

  public toastError(message: string): void {
    this.toast.error(message, {duration: 3000});
    throw new Error(message)
  }

  public toastSuccess(message: string): void {
    this.toast.success(message, {duration: 3000});
  }

  public toastWarning(message: string): void {
    this.toast.warning(message, {duration: 3000});
  }

  public async navigate(route: string): Promise<void> {
    await this.router.navigate([route]);
  }

  public validator( formGroup: FormGroup){

    if(formGroup.get('fname')?.hasError('required')){
      this.toast.error("First name cannot be empty field!");
      return false;
     }
     else if(formGroup.get('fname')?.hasError('pattern')){
      this.toast.error("First name must contain only letters");
      return false;
     }

     else if(formGroup.get('lname')?.hasError('required')){
      this.toast.error("Last name cannot be empty field!");
      return false;
     }
     else if(formGroup.get('lname')?.hasError('pattern')){
      this.toast.error("Last name must contain only letters");
      return false;
     }

     else if(formGroup.get('email')?.hasError('required')){
      this.toast.error("Email address cannot be empty field!");
      return false;
     }
     else if(formGroup.get('email')?.hasError('pattern')){
      this.toast.error("Invalid email address");
      return false;
     }

     else if(formGroup.get('password')?.hasError('required')){
      this.toast.error("Password cannot be empty field!");
      return false;
     }
     else if(formGroup.get('password')?.hasError('pattern')){
      this.toast.error("Password must contain 8 - 16 characters and atleast one capital letter, a symbol and a number.");
      return false;
     }

     else if(formGroup.get('confirmPassword')?.hasError('required')){
      this.toast.error("Confirm Password cannot be empty field!");
      return false;
     }
     else if(formGroup.get('confirmPassword')?.hasError('pattern')){
      this.toast.error("Confirm Password must contain 8 - 16 characters and atleast one capital letter, a symbol and a number.");
      return false;
     }else if(formGroup.value.confirmPassword!== null && formGroup.value.confirmPassword!== undefined ){

      if(formGroup.value.password !== formGroup.value.confirmPassword){
        this.toast.error("Password did not matched!");

       }
     }

     return true;

   }

  private onInit(): void {

  }

  private onDestroy(): void {

  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private onChanges(changes: SimpleChanges): void {

  }

  private afterViewInit(): void {
    // code here
  }

}
