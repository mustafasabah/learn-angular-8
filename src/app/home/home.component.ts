import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  h1style: boolean = false;
  users: object;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(data => {
      this.users = data;
      // console.log(data.data[2]);
    });
    // return this.users;
  }
  firstClick() {
    // this.h1style = this.data.firstClick(this.h1style);
    // return this.h1style = true;
    (this.h1style) ? this.h1style = false : this.h1style = true;
  }
}
