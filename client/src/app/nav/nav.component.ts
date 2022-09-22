import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccauntService } from '../_services/accaunt.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  model: any = {};


  constructor(public accauntService: AccauntService,private router:Router) {}

  ngOnInit(): void {
  }

  login() {
    this.accauntService.login(this.model).subscribe(
      (response) => {
       this.router.navigateByUrl('/members');
      },
      (error) => {
        console.log(error);
      }
    );
  }
  logout() { 
    this.accauntService.logout();
    this.router.navigateByUrl('/');
  }
}
