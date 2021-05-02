import {Component, HostListener, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Specialist} from '../models/specialist';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder,
              private http: HttpClient) {
  }

  specialist: Specialist;

  specialistRegistrationForm: FormGroup;

  accountType: string;
  englishLevel: string;

  accountTypes: string[] = ['Specialist', 'Company'];
  englishLevels: string[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

  employmentOption: string;
  employmentOptions: string[] = ['Work from home', 'Full time', 'Part time'];

  onChange: Function;
  private photo = null;

  ngOnInit() {
    this.specialistRegistrationForm = this.formBuilder.group({
      Surname: new FormControl(''),
      Name: new FormControl(''),
      Photo: new FormControl(null, [Validators.required]),
      Email: new FormControl(''),
      Password: new FormControl(''),
      DesiredSalary: new FormControl(''),
      YearsOfExperience: new FormControl(''),
      City: new FormControl(''),
      Technologies: new FormControl(''),
      EnglishLevel: new FormControl(''),
      EmploymentOption: new FormControl(''),
      PhoneNumber: new FormControl(''),
      Skype: new FormControl(''),
    });

    this.specialistRegistrationForm.reset();
  }

  OnFileSelected(event) {
    console.log(event);
    this.photo = <File>event.target.files[0];
  }

  register() {
    if (this.accountType === 'Specialist') {
      this.specialist = new Specialist(
        this.specialistRegistrationForm.controls.Email.value,
        this.specialistRegistrationForm.controls.Password.value,
        this.specialistRegistrationForm.controls.DesiredSalary.value,
        this.specialistRegistrationForm.controls.YearsOfExperience.value,
        this.specialistRegistrationForm.controls.City.value,
        this.specialistRegistrationForm.controls.Technologies.value,
        this.specialistRegistrationForm.controls.EnglishLevel.value,
        this.specialistRegistrationForm.controls.EmploymentOption.value,
        this.specialistRegistrationForm.controls.PhoneNumber.value,
        this.specialistRegistrationForm.controls.Skype.value,
        this.photo.name,
        this.specialistRegistrationForm.controls.Name.value,
        this.specialistRegistrationForm.controls.Surname.value
      );

      console.log(this.specialist);

      this.http.post('http://localhost:64709/api/register/specialist', JSON.stringify(this.specialist), {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }).subscribe(() => {
        console.log('posted');
      }, err => {
        console.log(err);
      });

      const formData = new FormData();
      const fileExtension = this.photo.name.split('?')[0].split('.').pop();
      console.log(fileExtension);
      formData.append('file', this.photo, this.specialist.Email + '.' + fileExtension);
      this.http.post('http://localhost:64709/api/register/photo', formData
      ).subscribe(() => {
        console.log('uploaded');
      }, err => {
        console.log(err);
      });

      this.specialistRegistrationForm.reset();
    }

  }
}
