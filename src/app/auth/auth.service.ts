import { Injectable } from '@angular/core';
import * as firebase from 'firebase';


@Injectable()
export class AuthService {

  token : string;
  private storage = window.localStorage;
  constructor() { }
  signupUser(email : string, password : string){
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(resp=>console.log(resp)).catch(error => console.log(error));
  }

  signinUser(email : string, password : string, cb){
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response=>{
        //console.log(response); 
        cb("Successfully Signed In!!");
        firebase.auth().currentUser.getToken()
          .then(token=>this.token=token);
      })
      .catch(error=>{console.log(error); cb(error.message)});
  }

  getToken(){
    firebase.auth().currentUser.getToken()
      .then(token=>this.token=token);
      return this.token;
  }

  logout(){
    firebase.auth().signOut();
    this.token = null;
  }
  isAuthenticated(){
    return this.token !=null;
  }
}
