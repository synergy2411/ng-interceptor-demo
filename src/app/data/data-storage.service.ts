import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
//import { Observable, throw } from 'rxjs';
//import { retry, catchError } from "rxjs/operators";
import { AuthService } from '../auth/auth.service';
import { HttpRequest } from 'selenium-webdriver/http';


@Injectable()
export class DataStorageService {
  token = "";
  constructor(private httpClient : HttpClient,
              private authService : AuthService) { }

  getUserData(){
    this.token = this.authService.getToken();
    this.httpClient.get("assets/config.json").map(resp=>resp)
      .subscribe(data=>console.log(data));

    return this.httpClient.get("https://proj-name-b7600.firebaseio.com/userdata.json",{
     // params : new HttpParams().set("auth", this.token),
      observe : 'body',
      //headers : new HttpHeaders().
    })
    //.pipe(retry(3), catchError(this.handleError))
      .map(response=>response)
      
  }
  addNewUser(user){
    this.token = this.authService.getToken();
    return this.httpClient.post("https://proj-name-b7600.firebaseio.com/mydata.json",user);
  }

  // private handleError(err : HttpErrorResponse){
  //   if(err.error instanceof ErrorEvent){
  //     console.error(`Error occured : ${err.error.message}`);
  //   }else{
  //     console.log(`Backend returned Code : ${err.status}
  //         Body was : ${err.error}
  //     `)
  //   } return throwError('Bad things');
  // }

}
