import {Component, OnInit} from '@angular/core';
import {Specialist} from '../models/specialist';
import {environment} from '../../environments/environment';
import {FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../services/user.service';
import {async, Observable} from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  currentSpecialist: Observable<Specialist>;
  englishLevels = environment.englishLevels;
  employmentOptions = environment.employmentOptions;
  specialistProfileForm: FormGroup;
  image: string;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.specialistProfileForm = new FormGroup({
      Surname: new FormControl(),
      Name: new FormControl(),
      Email: new FormControl(),
      Password: new FormControl(),
      DesiredSalary: new FormControl(),
      YearsOfExperience: new FormControl(),
      Address: new FormControl(),
      Technologies: new FormControl(),
      EnglishLevel: new FormControl(),
      EmploymentOption: new FormControl(),
      PhoneNumber: new FormControl(),
      Skype: new FormControl(),
      Position: new FormControl()
    });

    this.currentSpecialist = this.userService.getCurrentUser();

    this.currentSpecialist.subscribe(data => this.specialistProfileForm.get('EmploymentOption').setValue(data.employmentOptions));
    this.currentSpecialist.subscribe(data => this.specialistProfileForm.get('EnglishLevel').setValue(data.englishLevel));
    this.currentSpecialist.subscribe(data => this.specialistProfileForm.get('Email').setValue(data.login.email));
    this.currentSpecialist.subscribe(data => this.specialistProfileForm.get('Password').setValue(data.login.password));
    this.currentSpecialist.subscribe(data => this.image = environment.api_url + 'api/file/photo/' + data.photoPath);
  }
}
