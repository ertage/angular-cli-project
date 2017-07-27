import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home-component/home.component'
import { UserComponent } from '../user-component/user.component';
import { PageNotFoundComponent } from './not-found.component';


const appRouts: Routes = [
  {
    path: '',   redirectTo: '/dashboard', pathMatch: 'full'
  },
  {
    path: 'dashboard',   component: HomeComponent
  },
  {
    path:'userDetail/:id', component: UserComponent
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