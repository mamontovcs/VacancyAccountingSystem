import {Company} from './../models/company';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Specialist} from '../models/specialist';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {Login} from '../models/login';

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
  company: Company;

  specialistRegistrationForm: FormGroup;
  companyRegistrationForm: FormGroup;

  accountType: string;
  private photo = null;

  englishLevels = environment.englishLevels;
  employmentOptions = environment.employmentOptions;
  accountTypes = environment.accountTypes;

  ngOnInit() {
    this.specialistRegistrationForm = this.formBuilder.group({
      Surname: new FormControl(''),
      Name: new FormControl(''),
      Photo: new FormControl(null, [Validators.required]),
      Email: new FormControl(''),
      Password: new FormControl(''),
      DesiredSalary: new FormControl(''),
      YearsOfExperience: new FormControl(''),
      Address: new FormControl(''),
      Technologies: new FormControl(''),
      EnglishLevel: new FormControl('A1'),
      EmploymentOption: new FormControl('Work from home'),
      PhoneNumber: new FormControl(''),
      Skype: new FormControl(''),
      Position: new FormControl('')
    });

    this.companyRegistrationForm = this.formBuilder.group({
      Name: new FormControl(''),
      AboutCompany: new FormControl(''),
      Photo: new FormControl(null, [Validators.required]),
      Website: new FormControl(''),
      Email: new FormControl(''),
      Password: new FormControl('')
    });
  }


  register() {
    if (this.accountType === 'Specialist') {
      this.specialist = new Specialist(
        new Login(this.specialistRegistrationForm.controls.Email.value,
          this.specialistRegistrationForm.controls.Password.value, 'Specialist'),
        this.specialistRegistrationForm.controls.DesiredSalary.value,
        this.specialistRegistrationForm.controls.YearsOfExperience.value,
        this.specialistRegistrationForm.controls.Address.value,
        this.specialistRegistrationForm.controls.Technologies.value,
        this.specialistRegistrationForm.controls.EnglishLevel.value,
        this.specialistRegistrationForm.controls.EmploymentOption.value,
        this.specialistRegistrationForm.controls.PhoneNumber.value,
        this.specialistRegistrationForm.controls.Skype.value,
        this.generatePhotoName(this.specialistRegistrationForm.controls.Email.value),
        this.specialistRegistrationForm.controls.Name.value,
        this.specialistRegistrationForm.controls.Surname.value,
        this.specialistRegistrationForm.controls.Position.value
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

      this.uploadPhoto(this.specialistRegistrationForm.controls.Email.value);

      this.specialistRegistrationForm.reset();
    }

    if (this.accountType === 'Company') {
      this.company = new Company(
        new Login(this.companyRegistrationForm.controls.Email.value,
          this.companyRegistrationForm.controls.Password.value, 'Company'),
        this.companyRegistrationForm.controls.Name.value,
        this.generatePhotoName(this.companyRegistrationForm.controls.Email.value),
        this.companyRegistrationForm.controls.Website.value,
        this.companyRegistrationForm.controls.AboutCompany.value,
      );

      console.log(this.company);

      this.http.post('http://localhost:64709/api/register/company', JSON.stringify(this.company), {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }).subscribe(() => {
        console.log('posted');
      }, err => {
        console.log(err);
      });

      this.uploadPhoto(this.companyRegistrationForm.controls.Email.value);

      this.companyRegistrationForm.reset();
    }

    this.router.navigate(['/']);
  }

  private uploadPhoto(email: string) {
    const formData = new FormData();
    formData.append('file', this.photo, this.generatePhotoName(email));
    this.http.post('http://localhost:64709/api/file/photo', formData
    ).subscribe(() => {
      console.log('uploaded');
    }, err => {
      console.log(err);
    });
  }

  private generatePhotoName(email: string): string {
    const fileExtension = this.photo.name.split('?')[0].split('.').pop();
    return email + '.' + fileExtension;
  }

  private OnFileSelected(event) {
    console.log(event);
    this.photo = <File>event.target.files[0];
  }
}
