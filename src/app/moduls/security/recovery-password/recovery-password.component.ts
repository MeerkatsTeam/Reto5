import { Component, OnInit} from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-recovery-password',
    templateUrl: './recovery-password.component.html',
    styleUrls: ['./recovery-password.component.css']

})
export class RecoveryPasswordComponent implements OnInit{
    password_recovery: FormGroup = new FormGroup({
        email: new FormControl(''),
    });
    submitted = false;
    constructor(private formBuilder:FormBuilder){ }
    ngOnInit(): void{
        this.password_recovery= this.formBuilder.group({
            email: ['',[Validators.required, Validators.email]]
        });
    }
    get f (): {[key:string]: AbstractControl}{
      return this.password_recovery.controls;
    }
  
    onSubmit(): void{  
      this.submitted = true;
      if(this.password_recovery.invalid){
        return;
      }
      console.log(JSON.stringify(this.password_recovery.value, null, 2));
    }
  }