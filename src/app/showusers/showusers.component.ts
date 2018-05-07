import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../data/data-storage.service';

@Component({
  selector: 'app-showusers',
  templateUrl: './showusers.component.html',
  styleUrls: ['./showusers.component.css']
})
export class ShowusersComponent implements OnInit {
  users : any;
  constructor(private dataStorageService : DataStorageService) { }

  ngOnInit() {
    this.dataStorageService.getUserData().subscribe(data=>this.users=data)
  }

}
