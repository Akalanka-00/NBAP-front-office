import { Component } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { URL } from '../../../app-constants/interface/project-url.interface';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-project-creation-container',
  standalone: true,
  imports: [
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './project-creation-container.component.html',
  styleUrl: './project-creation-container.component.scss'
})


export class ProjectCreationContainerComponent  {



  public externalURLS: URL[] = [
    {hostname: 'github', url:'https://www.github.com'},
    {hostname: 'figma', url:'https://www.figma.com'},
  ]

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder) {}


}
