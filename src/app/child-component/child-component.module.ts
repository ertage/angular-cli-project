import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ChildComponent } from './child-component.component';

@NgModule({
  imports: [FormsModule],
  declarations: [ChildComponent],
  exports: [ChildComponent]
})

export class ChildModule{

}