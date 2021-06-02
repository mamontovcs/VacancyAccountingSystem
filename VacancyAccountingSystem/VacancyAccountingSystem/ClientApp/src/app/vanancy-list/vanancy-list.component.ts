import {Component, OnInit} from '@angular/core';
import {Vacancy} from '../models/vacancy';
import {MatDialog} from '@angular/material';
import {VacancyInfoDialogComponent} from '../vacancy-info-dialog/vacancy-info-dialog.component';
import {VacancyService} from '../services/vacancy.service';

@Component({
  selector: 'app-vanancy-list',
  templateUrl: './vanancy-list.component.html',
  styleUrls: ['./vanancy-list.component.css']
})
export class VanancyListComponent implements OnInit {

  vacancies: Array<Vacancy> = [];
  selectedValue: Vacancy;
  keyWord: string;

  constructor(private infoDialog: MatDialog,
              private vacancyService: VacancyService) {


  }

  ngOnInit() {
    this.vacancyService.GetAllVacancies().subscribe((data: Vacancy[]) => {
      this.vacancies = data;
      console.log(this.vacancies);
    });
  }

  OnMoreClick(vacancy: Vacancy) {
    const dialog = this.infoDialog.open(VacancyInfoDialogComponent, {data: vacancy});
  }

  OnSearchClick(keyWord: string) {
    console.log(keyWord);
    this.keyWord = keyWord;
    this.vacancyService.GetVacanciesByKeyWord(keyWord)
      .subscribe((data: Vacancy[]) => this.vacancies = data);
  }


}
