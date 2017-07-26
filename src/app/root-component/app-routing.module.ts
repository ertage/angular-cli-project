import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home-component/home.component'
import { UserComponent } from '../user-component/user.component';
import { PageNotFoundComponent } from './not-found.component';


const appRouts: Routes = [
  {
    path: '',   redirectTo: '/users', pathMatch: 'full'
  },
  {
    path: 'users',   component: HomeComponent
  },
  {
    path:'userDetails', component: UserComponent
  },
  {
    path:'**', component: PageNotFoundComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRouts)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule{}