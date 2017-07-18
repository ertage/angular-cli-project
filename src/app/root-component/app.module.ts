import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { ChildModule } from '../child-component/child-component.module';
import { AppComponent } from '../root-component/app.component';


@NgModule({
  declarations: [
    AppComponent
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
