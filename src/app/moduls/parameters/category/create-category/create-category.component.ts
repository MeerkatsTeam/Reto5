import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from '../../../../services/category.service';
import { CategoryModel } from 'src/app/models/category.model';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: CategoryService
    ) { }

  ngOnInit(): void {
    this.CreateForm();
  }

  get GetForm(): {[key: string]: AbstractControl}{
    return this.form.controls;
  }

  CreateForm() {
    this.form= this.fb.group({
      name: ["",
          Validators.required]
    });
  }

  SaveRecord(){
    let model = new CategoryModel();
    model.name = this.GetForm['name'].value;
    this.service.SaveRecord(model).subscribe({
      next:(data: CategoryModel)=>{
        console.log("Saved");
        this.router.navigate(["/parameters/category"])
      },
      error:(err:any)=>{
        console.log(err);
      }
    })
  }
}
