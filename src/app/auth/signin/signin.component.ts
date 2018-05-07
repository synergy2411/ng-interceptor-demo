import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signin(f : NgForm){
    const email = f.value.email;
    const password = f.value.password;
    console.log(email, password);
    this.authService.signinUser(email, password, this.singInMsg);
  }

  singInMsg(msg: string){
    alert(msg);
  }
  constructor(private authService : AuthService) { }

  ngOnInit() {
  }

}
