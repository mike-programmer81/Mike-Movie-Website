import { Component, inject, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { ButtonModule } from 'primeng/button';
import { LoginModel } from './login.model';
import { FormsModule } from '@angular/forms';
@Component({
    selector: 'selector-name',
    templateUrl: 'Login.component.html',
    styleUrl : './login.component.css',
    imports: [ButtonModule, FormsModule],
    providers: [LoginService]

})

export class LoginComponent implements OnInit {
    loginmodel: LoginModel = {
        username: '',
        password: '',
    }

    loginservice = inject(LoginService)

    handleLogin() {
        this.loginservice.login({
            password: this.loginmodel.password,
            username: this.loginmodel.username,
            expiresInMins: 30
        }).subscribe({
            next: ((response) => {
                debugger
            }),
            error: (() => {
                debugger
            }),
            complete: (() => {

            })
        })
    }
    ngOnInit() { }

}