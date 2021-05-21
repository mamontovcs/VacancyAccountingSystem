import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private invalidLogin: boolean;

  constructor(private http: HttpClient,
              private router: Router) {
  }

  ngOnInit() {
  }

  login(form: NgForm) {
    const credentials = JSON.stringify(form.value);
    this.http.post(environment.api_url + 'api/auth/login', credentials, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).subscribe(response => {
      const token = (<any>response).token;
      localStorage.setItem('jwt', token);
      this.invalidLogin = false;
      this.router.navigate(['/']);
    }, err => {
      this.invalidLogin = true;
    });
  }

  onSignUpClick() {
    this.router.navigate(['registration']);
  }
}
