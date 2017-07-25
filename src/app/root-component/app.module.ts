import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule }   from '@angular/forms';

import { ChildModule } from '../child-component/child-component.module';

import { AppComponent } from '../root-component/app.component';
import { DataComponent } from '../data-component/data-component.component';
import { FormComponent } from '../form/form.component';
import { DataDrivenFormComponent } from '../data-driven-from/data-driven-form.component'


import { BoldDirective } from '../common/directives//bold.directive';
import { DataService  } from '../common/services/data.service';
import { LogService } from '../common/services/log.service';

@NgModule({
  declarations: [
    AppComponent,
    BoldDirective,
    DataComponent,
    FormComponent,
    DataDrivenFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ChildModule,
    ReactiveFormsModule
  ],
  providers: [DataService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
