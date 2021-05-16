import {Injectable} from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private jwtHelper: JwtHelperService,
              private router: Router) {
  }

  logOut() {
    localStorage.removeItem('jwt');
    this.router.navigate(['login']);
  }

  isUserAuthenticated() {
    const token: string = localStorage.getItem('jwt');
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    } else {
      return false;
    }
  }

  public getCurrentUserName() {
    return this.jwtHelper.decodeToken(localStorage.getItem('jwt')).UserName;
  }

  public getCurrentUserType() {
    return this.jwtHelper.decodeToken(localStorage.getItem('jwt')).Type;
  }
}
