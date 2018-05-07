import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { DataStorageService } from './data/data-storage.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  constructor(private dataStorageServive : DataStorageService){}
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyBsW7Kyxa4D8u4_CZdtdGvNzg59-sRqFAQ",
      authDomain: "proj-name-b7600.firebaseapp.com"
    });
    
  }
}
