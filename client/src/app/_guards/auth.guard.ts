import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AccauntService } from '../_services/accaunt.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private accauntService: AccauntService,
    private toastr: ToastrService
  ) {}

  canActivate(): Observable<boolean> {
    return this.accauntService.currentUser$.pipe(
      map((user) => {
        if (user) return true;
        this.toastr.error('You shall not pass!');
      })
    );
  }
}
