import { Component, inject } from '@angular/core';
import { RouterOutlet,Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar-layout.html',
  imports:[ButtonModule,RouterOutlet]

})
export class NavbarComponent { 
  router = inject(Router)

  
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
}