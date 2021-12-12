import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NvMenuComponent } from './nv-menu/nv-menu.component';
import { FooterComponent } from './footer/footer.component';
//import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    NotFoundComponent,
    NvMenuComponent,
    FooterComponent,
    //FormComponent
  ],
  imports: [
    CommonModule,
    MasterRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MasterModule { }
