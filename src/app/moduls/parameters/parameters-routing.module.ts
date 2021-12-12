import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category/category.component';
import { CreateCategoryComponent } from './category/create-category/create-category.component';
import { EditCategoryComponent } from './category/edit-category/edit-category.component';
import { RemoveCategoryComponent } from './category/remove-category/remove-category.component';

const routes: Routes = [
  {
    path: "category-list",
    component: CategoryComponent
  },
  {
    path: "category-create",
    component: CreateCategoryComponent
  },
  {
    path: "category-edit/:id",
    component: EditCategoryComponent
  },
  {
    path: "category-remove/:id",
    component: RemoveCategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametersRoutingModule { }
