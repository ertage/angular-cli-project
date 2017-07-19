import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { ChildModule } from '../child-component/child-component.module';
import { AppComponent } from '../root-component/app.component';

import { BoldDirective } from '../common/directives//bold.directive'

@NgModule({
  declarations: [
    AppComponent,
    BoldDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ChildModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
