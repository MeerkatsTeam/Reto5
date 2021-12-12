import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { LoginComponent } from './login/login.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { RecoveryPasswordComponent } from './recovery-password/recovery-password.component';
import { IdentificationComponent } from './identification/identification.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    ChangePasswordComponent,
    UpdatePasswordComponent,
    RecoveryPasswordComponent,
    IdentificationComponent
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SecurityModule { }
