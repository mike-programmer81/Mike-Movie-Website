import { Routes } from '@angular/router';
import { NavbarComponent } from './layouts/navbar-layout';
import path from 'path';

export const routes: Routes = [
    {
        path:'',
        pathMatch:'full', 
        redirectTo:'home', 

    },

{
    path: 'home',
    component:NavbarComponent,
    children:[
       {
        path:'',
        loadChildren: () => import('./pages/home/home.routes').then(r=>r.homeRoutes)
       }
    ]
    
},

{
    path:'List',
    component:NavbarComponent,
    children:[
        {
            path:'',
            loadChildren:() => import('./pages/List/List.routes').then(r=>r.ListRoutes)
            
        }
    ]
},
{
    path:'Login',
    component:NavbarComponent,
    children:[
        {
            path:'',
            loadChildren:() => import('./pages/login/login.routes').then(r=>r.LoginRoutes)
            
        }
    ]
}
];
