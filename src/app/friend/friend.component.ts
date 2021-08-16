import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Friend {
  constructor(
    public userId : number,
    public id : number,
    public title : string ,
    public body : string 
  ) {

  }
}
@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {
  
  friends : Friend[];
  totalRecords: string
  page : number=1
  constructor(
    private httpClient:HttpClient
  ) { }

  ngOnInit() {
    this.getFriends();
  }

  getFriends(){
    this.httpClient.get<any>('https://jsonplaceholder.typicode.com/posts').subscribe(response => {
      console.log(response);
      this.friends=response;
    });
    
  }
}
