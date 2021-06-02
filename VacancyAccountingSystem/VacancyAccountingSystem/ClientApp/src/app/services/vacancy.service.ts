import {Injectable} from '@angular/core';
import {Vacancy} from '../models/vacancy';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {

  constructor(private http: HttpClient) {
  }

  GetAllVacancies(): Observable<Vacancy[]> {
    return this.http.get(environment.api_url + 'api/vacancies/getall') as Observable<Vacancy[]>;
  }

  GetVacanciesByKeyWord(keyWord: string): Observable<Vacancy[]> {
    return this.http.get(environment.api_url + 'api/vacancies/getByKeyWord/' + keyWord) as Observable<Vacancy[]>;
  }

}
