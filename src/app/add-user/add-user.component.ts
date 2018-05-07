import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataStorageService } from '../data/data-storage.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private dataStorageService : DataStorageService) { }
  adduser(f : NgForm){
    const firstName  = f.value.firstname;
    const lastname  = f.value.lastname;
    const contact  = f.value.contact;
    const email  = f.value.email;
    this.dataStorageService.addNewUser({firstName,lastname,email,contact})
      .subscribe(data=>{
        console.log("User Added!!");
        console.log(data);
      })
    console.log(firstName, lastname, contact, email);
  }
  ngOnInit() {
  }

}
