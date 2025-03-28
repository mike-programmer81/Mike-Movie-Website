import { inject, Injectable } from '@angular/core';
import { LoginModel } from './login.model';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class LoginService {
    http =inject(HttpClient)

    login(LoginModel:LoginModel){

    return this.http.post('https://dummyjson.com/auth/login',LoginModel)
    }
    
}