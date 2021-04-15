import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  register(registrationForm: NgForm) {



  }
}
