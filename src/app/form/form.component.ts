import { Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
 
@Component({
    selector: 'form-comp',
    styles: [`
        input.ng-touched.ng-invalid {border:solid red 2px;}
        input.ng-touched.ng-valid {border:solid green 2px;}
    `],
    templateUrl: './form.component.html'
})

export class FormComponent{

  submit(myForm: NgForm){
    console.log(myForm);
  }

}