import {Component} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
              private auth: AuthService) {
  }

  IsSpecialist() {
    return this.auth.getCurrentUserType() === 'Specialist';
  }

  IsCompany() {
    return this.auth.getCurrentUserType() === 'Company';
  }

  GetCurrentUserType() {
    return this.auth.getCurrentUserType();
  }

  LogOut() {
    return this.auth.logOut();
  }
}
