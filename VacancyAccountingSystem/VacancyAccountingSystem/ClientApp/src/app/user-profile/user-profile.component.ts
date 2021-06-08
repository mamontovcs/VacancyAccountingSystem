import {Component, OnInit} from '@angular/core';
import {Specialist} from '../models/specialist';
import {environment} from '../../environments/environment';
import {FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../services/user.service';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Login} from '../models/login';
import {AuthService} from '../services/auth.service';
import {Company} from '../models/company';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Image} from '../models/image';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  currentSpecialist: Observable<Specialist>;
  currentCompany: Observable<Company>;
  englishLevels = environment.englishLevels;
  employmentOptions = environment.employmentOptions;
  specialistProfileForm: FormGroup;
  companyProfileForm: FormGroup;
  image: string;

  // tslint:disable-next-line:max-line-length
  constructor(private http: HttpClient, private userService: UserService, private authService: AuthService, private _snackBar: MatSnackBar) {
  }

  ngOnInit() {
    if (this.authService.getCurrentUserType() === 'Specialist') {
      this.specialistProfileForm = new FormGroup({
        Surname: new FormControl(),
        Name: new FormControl(),
        Email: new FormControl({disabled: true}),
        Password: new FormControl({disabled: true}),
        DesiredSalary: new FormControl(),
        YearsOfExperience: new FormControl(),
        Address: new FormControl(),
        Technologies: new FormControl(),
        EnglishLevel: new FormControl(),
        EmploymentOption: new FormControl(),
        PhoneNumber: new FormControl(),
        Skype: new FormControl(),
        Position: new FormControl(),
        Id: new FormControl(),
        PhotoPath: new FormControl()
      });

      this.currentSpecialist = this.userService.getCurrentUser();

      this.currentSpecialist.subscribe(data => this.specialistProfileForm.get('Id').setValue(data.id));
      this.currentSpecialist.subscribe(data => this.specialistProfileForm.get('Position').setValue(data.position));
      this.currentSpecialist.subscribe(data => this.specialistProfileForm.get('Skype').setValue(data.skype));
      this.currentSpecialist.subscribe(data => this.specialistProfileForm.get('PhoneNumber').setValue(data.phoneNumber));
      this.currentSpecialist.subscribe(data => this.specialistProfileForm.get('Technologies').setValue(data.technologies));
      this.currentSpecialist.subscribe(data => this.specialistProfileForm.get('Address').setValue(data.address));
      this.currentSpecialist.subscribe(data => this.specialistProfileForm.get('YearsOfExperience').setValue(data.yearsOfExperience));
      this.currentSpecialist.subscribe(data => this.specialistProfileForm.get('Surname').setValue(data.surname));
      this.currentSpecialist.subscribe(data => this.specialistProfileForm.get('Name').setValue(data.name));
      this.currentSpecialist.subscribe(data => this.specialistProfileForm.get('DesiredSalary').setValue(data.desiredSalary));
      this.currentSpecialist.subscribe(data => this.specialistProfileForm.get('EmploymentOption').setValue(data.employmentOptions));
      this.currentSpecialist.subscribe(data => this.specialistProfileForm.get('EnglishLevel').setValue(data.englishLevel));
      this.currentSpecialist.subscribe(data => this.specialistProfileForm.get('Email').setValue(data.login.email));
      this.currentSpecialist.subscribe(data => this.specialistProfileForm.get('Password').setValue(data.login.password));
      this.currentSpecialist.subscribe(data => this.specialistProfileForm.get('PhotoPath').setValue(data.image.imageTitle));
      this.currentSpecialist.subscribe(data => this.image = environment.api_url + 'api/file/photo/' + data.image.imageTitle);
    } else {
      this.companyProfileForm = new FormGroup({
        Name: new FormControl(),
        About: new FormControl(),
        WebSite: new FormControl({disabled: true}),
        Password: new FormControl({disabled: true}),
        Email: new FormControl(),
        Id: new FormControl(),
        PhotoPath: new FormControl()
      });

      this.currentCompany = this.userService.getCurrentUser();

      this.currentCompany.subscribe(data => this.image = environment.api_url + 'api/file/photo/' + data.image.imageTitle);
      this.currentCompany.subscribe(data => this.companyProfileForm.get('Id').setValue(data.id));
      this.currentCompany.subscribe(data => this.companyProfileForm.get('Name').setValue(data.name));
      this.currentCompany.subscribe(data => this.companyProfileForm.get('About').setValue(data.aboutCompany));
      this.currentCompany.subscribe(data => this.companyProfileForm.get('WebSite').setValue(data.website));
      this.currentCompany.subscribe(data => this.companyProfileForm.get('Password').setValue(data.login.password));
      this.currentCompany.subscribe(data => this.companyProfileForm.get('Email').setValue(data.login.email));
      this.currentCompany.subscribe(data => this.companyProfileForm.get('PhotoPath').setValue(data.image.imageTitle));
    }
  }

  onUpdateClick() {
    if (this.authService.getCurrentUserType() === 'Specialist') {
      console.log(this.specialistProfileForm.value);
      this.http.put(environment.api_url + 'api/users/updateSpecialistProfile', JSON.stringify(
        new Specialist(
          // tslint:disable-next-line:max-line-length
          new Login(this.specialistProfileForm.get('Email').value, this.specialistProfileForm.get('Password').value, this.authService.getCurrentUserType()),
          this.specialistProfileForm.get('DesiredSalary').value,
          this.specialistProfileForm.get('YearsOfExperience').value,
          this.specialistProfileForm.get('Address').value,
          this.specialistProfileForm.get('Technologies').value,
          this.specialistProfileForm.get('EnglishLevel').value,
          this.specialistProfileForm.get('EmploymentOption').value,
          this.specialistProfileForm.get('PhoneNumber').value,
          this.specialistProfileForm.get('Skype').value,
          new Image(this.specialistProfileForm.get('PhotoPath').value),
          this.specialistProfileForm.get('Name').value,
          this.specialistProfileForm.get('Surname').value,
          this.specialistProfileForm.get('Position').value,
          this.specialistProfileForm.get('Id').value
        )),
        {
          headers: new HttpHeaders({
            'Content-Type': 'application/json'
          }),
        }
      ).subscribe(() => {
        console.log('posted');
      }, err => {
        console.log(err);
      });

       window.location.reload();
    } else {
      this._snackBar.open('Updating for company profile will be added soon!', 'Close');
    }
  }

}
