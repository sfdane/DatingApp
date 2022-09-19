import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccauntService } from '../_services/accaunt.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private accauntService: AccauntService) {}

  ngOnInit(): void {}

  register() {
    this.accauntService.register(this.model).subscribe(
      (response) => {
        console.log(response);
        this.cancel;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}
