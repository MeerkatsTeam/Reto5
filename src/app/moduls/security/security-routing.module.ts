import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IdentificationComponent } from './identification/identification.component';
import { RecoveryPasswordComponent } from './recovery-password/recovery-password.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';

const routes: Routes = [
{
  path: "identification",
  component: IdentificationComponent
},
{
  path: "recovery-password",
  component: RecoveryPasswordComponent
},

{
  path: "update-password",
  component: UpdatePasswordComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }