import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet,Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { LoginModel } from './login-model';
import { LoginService } from './login.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar-layout.html',
  imports:[ButtonModule,RouterOutlet,DialogModule,FormsModule],
    providers: [LoginService]

})
export class NavbarComponent implements OnInit { 
  router = inject(Router)
  dialogVisible: boolean = false;
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

  
  onclickHome(){

    this.router.navigate(['/home'])

  }
  
  onClickList(){
    this.router.navigate(['/List'])
  }

  onClickLogin(){
    this.router.navigate(['/Login'])
  }

  onClickTodo(){
    this.router.navigate(['/toDoList'])
  }
  onclickloginNew(){
    this.dialogVisible = true;
    
  }

  ngOnInit(): void {
    
  }
}