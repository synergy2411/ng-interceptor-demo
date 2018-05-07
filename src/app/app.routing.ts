import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { ShowusersComponent } from './showusers/showusers.component';
import { AddUserComponent } from './add-user/add-user.component';

export const APP_ROUTE : Routes = [
    {
        path : '',
        redirectTo : 'home',
        pathMatch : "full"
    },{
        path : "home",
        component : HomeComponent
    },{
        path : 'register',
        component : SignupComponent
    },{
        path : 'login',
        component : SigninComponent
    },{
        path : 'showusers',
        component : ShowusersComponent
    },{
        path : 'adduser',
        component : AddUserComponent
    },{
        path : '**',
        redirectTo : 'home',
        pathMatch : 'full'
    }
]
