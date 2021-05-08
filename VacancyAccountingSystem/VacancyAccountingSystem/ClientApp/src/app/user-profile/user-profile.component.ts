import { Component, OnInit } from '@angular/core';
import {Specialist} from '../models/specialist';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  currentSpecialist: Specialist;

  constructor() { }

  ngOnInit() {
    this.currentSpecialist = new Specialist(
      'vintixfish@gmail.com',
      '200008',
      5000,
      50,
      'Ukraine, Kiev',
      'C# .Net Delphi',
      'B2',
      'Full-time',
      '067-011-94-97',
      'Gomer1245',
      'photo',
      'Vitaliy',
      'Mamontov',
      '.Net Developer'
    );
  }

}
