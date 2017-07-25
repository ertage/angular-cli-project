import { Component} from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';

import { userNameValidator } from '../common/validators/user-name-validator.validator';

@Component({
    selector: 'data-driven-form',
    styles: [`
        input.ng-touched.ng-invalid {border:solid red 2px;}
        input.ng-touched.ng-valid {border:solid green 2px;}
    `],
    templateUrl: './data-driven-form.component.html'
})

export class DataDrivenFormComponent{

  public myForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ){
   
    this.myForm = formBuilder.group({
      "userName": ["Tom", [Validators.required]],
      "userEmail": ["", [ Validators.required, Validators.pattern("[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}")]],
      "phones": formBuilder.array([
                ["+3", Validators.required]
            ])
    })
  }
  
  addPhone(){
    (<FormArray>this.myForm.controls["phones"]).push(new FormControl("+3", Validators.required));
  }

  submit(){
    console.log(this.myForm);
  }

}