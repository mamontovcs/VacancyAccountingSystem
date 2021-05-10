import { Injectable } from '@angular/core';
import {AuthService} from './auth.service';
import {Specialist} from '../models/specialist';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private currentSpecialist: Specialist;

  constructor(private authService: AuthService,
              private http: HttpClient) { }


  public getCurrentUser() {
    const currentUserName = this.authService.getCurrentUserName();
    //
    // this.http.get('http://localhost:64709/api/users/getSpecialistInfo/' + currentUserName)
    //   .toPromise().then(res => this.currentSpecialist = res as Specialist);
    //
    // console.log(this.currentSpecialist);
    const data = this.http.get<Specialist>('http://localhost:64709/api/users/getSpecialistInfo/' + currentUserName);
    console.log(data);
    return data;
  }
}
