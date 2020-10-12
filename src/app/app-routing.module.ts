import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {RecordComponent} from "./record/record.component";
import {ShowComponent} from "./show/show.component";


const routes: Routes = [
  { path : '' , redirectTo : '/login' , pathMatch : 'full'},
  { path : 'login' , component : LoginComponent },
  { path : 'register' , component : RegisterComponent },
  { path : 'record' , component : RecordComponent },
  {path : 'show' , component : ShowComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { LoginComponent ; RegisterComponent ; RecordComponent ; ShowComponent }
