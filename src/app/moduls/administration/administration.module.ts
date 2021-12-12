import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationRoutingModule } from './administration-routing.module';
import { CreatePersonComponent } from './persons/create-person/create-person.component';
import { EditPersonComponent } from './persons/edit-person/edit-person.component';
import { CreateProductComponent } from './products/create-product/create-product.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';


@NgModule({
  declarations: [
    CreatePersonComponent,
    EditPersonComponent,
    CreateProductComponent,
    EditProductComponent
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule
  ]
})
export class AdministrationModule { }
