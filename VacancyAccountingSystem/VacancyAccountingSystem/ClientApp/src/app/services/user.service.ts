import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';
import {Specialist} from '../models/specialist';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentSpecialist: Specialist;

  constructor(private authService: AuthService,
              private http: HttpClient) {
  }


  public getCurrentUser() {
    const currentUserName = this.authService.getCurrentUserName();

    const data = this.http.get<Specialist>(environment.api_url + 'api/users/getSpecialistInfo/' + currentUserName);

    data.subscribe(res => this.currentSpecialist = res);

    return data;
  }
}
