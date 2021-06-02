import {Component, OnInit} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Vacancy} from '../models/vacancy';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../services/user.service';
import {Company} from '../models/company';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-vacancy-creator',
  templateUrl: './vacancy-creator.component.html',
  styleUrls: ['./vacancy-creator.component.css']
})
export class VacancyCreatorComponent implements OnInit {

  private newVacancy: Vacancy;
  private currentCompany: Observable<Company>;
  private company: Company;

  createVacancyForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private http: HttpClient,
              private userService: UserService) {
  }

  ngOnInit() {
    this.createVacancyForm = this.formBuilder.group({
      About: new FormControl(''),
      Header: new FormControl(''),
      Requirements: new FormControl(''),
      Offers: new FormControl(''),
      Salary: new FormControl('')
    });
  }

  CreateNewVacancy() {
    this.currentCompany = this.userService.getCurrentUser();

    // FIX UPLOADING HERE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    this.currentCompany.subscribe(data => {
      this.company = data;

      this.newVacancy = new Vacancy(this.createVacancyForm.controls.About.value,
        this.createVacancyForm.controls.Header.value,
        this.createVacancyForm.controls.Requirements.value,
        this.createVacancyForm.controls.Offers.value,
        this.createVacancyForm.controls.Salary.value,
        data);

       console.log(this.newVacancy);
    });

    this.http.post(environment.api_url + 'api/vacancies/add', JSON.stringify(this.newVacancy), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).subscribe(() => {
      console.log('posted');
    }, err => {
      console.log(err);
    });

    this.createVacancyForm.reset();
  }

}
