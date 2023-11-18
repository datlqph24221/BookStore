import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable(
  { providedIn: 'root' }
)
export class AuthGuard {

  constructor(private router: Router) { }

  canActivate() {
    const accessToken = localStorage.getItem('accessToken')
    if (!accessToken) {
      this.router.navigate(['/']);
      return false;
    }

    return true;
  }



}