import {Injectable} from '@angular/core';
import {Specialist} from '../models/specialist';

@Injectable({
  providedIn: 'root'
})
export class SpecialistsService {

  constructor() {
  }

  public FilterSpecialists(keyword: string, array: Array<Specialist>) {

    if (keyword === '' || keyword === undefined) {
      return array;
    } else {
      return array.filter(
        element => element.technologies.includes(keyword) || element.englishLevel === keyword || element.desiredSalary <= Number(keyword));
    }

  }
}
