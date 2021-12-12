import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './products/create-product/create-product.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { ListProductComponent } from './products/list-product/list-product.component';
import { CreatePersonComponent } from './persons/create-person/create-person.component';
import { EditPersonComponent } from './persons/edit-person/edit-person.component';
import { ListPersonComponent } from './persons/list-person/list-person.component';

const routes: Routes = [
  {
    path: "product-create",
    component: CreateProductComponent
  },
  {
    path: "product-edit",
    component: EditProductComponent
  },
  {
    path: "product",
    component: ListProductComponent
  },
  {
    path: "user-create",
    component: CreatePersonComponent
  },
  {
    path: "user-edit",
    component: EditPersonComponent
  },
  {
    path: "user",
    component: ListPersonComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
