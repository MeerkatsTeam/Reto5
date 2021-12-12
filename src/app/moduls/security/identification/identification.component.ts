import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { SecurityService } from '../../../services/security.service';
import { LocalStorageService } from '../../../services/local-storage.service';
import { Router } from '@angular/router';
import { GeneralData } from 'src/app/config/general-data';
import { SessionData } from '../../../models/session-data.model';
import { MD5 } from 'crypto-js';


@Component({
    selector: 'app-identification',
    templateUrl: './identification.component.html',
    styleUrls: ['./identification.component.css']
})

export class IdentificationComponent implements OnInit {
    formlogin: FormGroup = new FormGroup({
        email: new FormControl(''),
        password: new FormControl(''),
    });

    constructor(
        private fb: FormBuilder,
        private securityService: SecurityService,
        private localStorageService: LocalStorageService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.CreateForm();
    }

    CreateForm() {
        this.formlogin = this.fb.group({
            email: [
                'example@gmail.com',
                [
                    Validators.required,
                    Validators.email,
                    Validators.minLength(GeneralData.EMAIL_MIN_LENGTH),
                ],
            ],
            password: ['**********',
                [
                    Validators.required,
                    Validators.minLength(GeneralData.PASSWORD_MIN_LENGTH),
                    Validators.maxLength(GeneralData.PASSWORD_MAX_LENGTH),
                ],
            ],
        });
    }

    get GetForm(): { [key: string]: AbstractControl } {
        return this.formlogin.controls;
    }

    Login() {
        if (this.formlogin.invalid) {
            console.log(GeneralData.INVALID_FROM_MESSAGE);
        } else {
            console.log(JSON.stringify(this.formlogin.value, null, 2));
            let email = this.GetForm['email'].value;
            let password = MD5(this.GetForm['password'].value).toString();
            this.router.navigate(['/home']);
            this.securityService.Login(email, password).subscribe({
                next: (data: SessionData) => {
                    console.log(data);
                    this.localStorageService.SaveSessionData(data);
                    data.isLoggedIn = true;
                    this.securityService.RefreshSessionData(data);
                    this.router.navigate(['/home']);
                },
                error: (error: any) => {
                    console.log(error);
                },
            });
        }
    }
}