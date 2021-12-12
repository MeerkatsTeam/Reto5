import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { RecoveryPasswordComponent } from './recovery-password/recovery-password.component';
import { IdentificationComponent } from './identification/identification.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    
    UpdatePasswordComponent,
    RecoveryPasswordComponent,
    IdentificationComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SecurityModule { }
