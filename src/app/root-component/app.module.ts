import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api'

import {  AppRoutingModule } from './app-routing.module';

import { AppComponent } from '../root-component/app.component';
import { DataComponent } from '../data-component/data-component.component';
import { UserComponent } from '../user-component/user.component';
import { PageNotFoundComponent } from './not-found.component';
import { HomeComponent } from '../home-component/home.component';

import { BoldDirective } from '../common/directives//bold.directive';
import { DataService  } from '../common/services/data.service';
import { LogService } from '../common/services/log.service';
import { InMemoryDataService } from '../common/services/in-memory-data.service'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDatepicker } from '@ng-bootstrap/ng-bootstrap'

@NgModule({
  declarations: [
    AppComponent,
    BoldDirective,
    DataComponent,
    UserComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgbModule.forRoot(),
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [DataService, LogService],
  bootstrap: [AppComponent]
})

export class AppModule { }
