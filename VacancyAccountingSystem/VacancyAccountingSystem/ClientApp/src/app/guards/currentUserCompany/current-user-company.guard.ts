import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserCompanyGuard implements CanActivate {

  constructor(private auth: AuthService) {
  }

  canActivate() {
    return this.auth.getCurrentUserType() === 'Company';
  }
}
