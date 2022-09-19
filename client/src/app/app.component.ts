import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccauntService } from './_services/accaunt.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'The Dating app';
  users: any;

  constructor(private accauntSeervice: AccauntService){}

  ngOnInit(){
    this.setCurentUser();
}

setCurentUser() 
{
  const user : User=JSON.parse(localStorage.getItem('user'))
  this.accauntSeervice.setCurrentUser(user);
}

}