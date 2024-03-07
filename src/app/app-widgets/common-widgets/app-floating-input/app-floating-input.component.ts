import { Component, EventEmitter, Injectable, Injector, Input, Output } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BaseWidgetDirective } from '../../../app-utils/base-widget/base-widget.directive';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
@Component({
  selector: 'app-floating-input',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule,],
  templateUrl: './app-floating-input.component.html',
  styleUrl: './app-floating-input.component.scss'
})

@Injectable()
export class AppFloatingInputComponent extends BaseWidgetDirective{

  @Input() public id: string='input';
  @Input() public placeholder: string = '';
  @Input() public name: string = 'input';
  @Input() public label: string = '';
  @Input() public type: string = 'text';
  @Input() public autofill: string = '';
  @Input() public hint: string = '';
  @Input() public error: string = '';
  @Input() public isRequired: boolean = false;
  @Input() public isDisabled: boolean = false;
  @Input() public isReadOnly: boolean = false;
  @Input() public formControl: FormControl = new FormControl();
  @Output() public floatingInputChange = new EventEmitter<string>();


  private _textInput: string='';
  private _toggleBlur: boolean=false;
  private _currentBlurStatus: boolean=false;

  constructor(injector: Injector){
    super(injector);
  }

  public get floatingInput(): string{
    return this._textInput;
  }

  public get floatingInputAsNumber(): number{
    return parseInt(this._textInput);
  }

  @Input() public set floatingInput(value: string) {
		this._textInput = value;
	}

  @Input() public set floatingInputAsNumber(value: number) {
		this._textInput = value.toString();
	}
  
public override onInit(): void {

  this.id !=''? this.id + '-input' :  this.id = 'input';
  
}

  public onInputChange(e: string): void{
    this._textInput = e;
  }

  public onInputeBlur():void{
    console.log(this._textInput);
    this.floatingInputChange.emit(this._textInput);

  }


}
