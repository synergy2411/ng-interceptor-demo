import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthService } from './auth/auth.service';
import { DataStorageService } from './data/data-storage.service';
import { APP_ROUTE } from './app.routing';
import { HomeComponent } from './home/home.component';
import { ShowusersComponent } from './showusers/showusers.component';
import { HeaderComponent } from './header/header.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AuthInterceptor } from './auth/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent,
    ShowusersComponent,
    HeaderComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTE)
  ],
  providers: [ AuthService, DataStorageService,
          {provide : HTTP_INTERCEPTORS, useClass : AuthInterceptor, multi : true} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
