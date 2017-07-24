import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { ChildModule } from '../child-component/child-component.module';

import { AppComponent } from '../root-component/app.component';
import { DataComponent } from '../data-component/data-component.component';

import { BoldDirective } from '../common/directives//bold.directive';
import { DataService  } from '../common/services/data.service';
import { LogService } from '../common/services/log.service';

@NgModule({
  declarations: [
    AppComponent,
    BoldDirective,
    DataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ChildModule
  ],
  providers: [DataService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
