import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";

import { ChildComponent } from './child-component.component';

@NgModule({
  imports: [FormsModule, CommonModule],
  declarations: [ChildComponent],
  exports: [ChildComponent]
})

export class ChildModule{

}