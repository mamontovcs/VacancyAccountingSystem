import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {Specialist} from '../models/specialist';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentUser: any;

  constructor(private authService: AuthService,
              private http: HttpClient) {
  }


  public getCurrentUser() {
    const currentUserName = this.authService.getCurrentUserName();
    let data = null;

    if (this.authService.getCurrentUserType() === 'Specialist') {
      data = this.http.get<any>(environment.api_url + 'api/users/getSpecialistInfo/' + currentUserName);
    } else {
      data = this.http.get<any>(environment.api_url + 'api/users/getCompanyInfo/' + currentUserName);
    }

    data.subscribe(res => this.currentUser = res);

    return data;
  }
}
