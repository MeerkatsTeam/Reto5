import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './moduls/master/home/home.component';
import { NotFoundComponent } from './moduls/master/not-found/not-found.component';
import { FormComponent } from './moduls/master/form/form.component';
const routes: Routes = [
{
  path: "home",
  component: HomeComponent
},
{
  path:"",
  pathMatch: "full",
  redirectTo: "/home"
},

{
  path: "security",
  loadChildren:()=>import("./moduls/security/security.module").then(x=>x.SecurityModule)
},
{
  path: "registration",
  component: FormComponent
},
{
  path: "**",
  component: NotFoundComponent
}

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
