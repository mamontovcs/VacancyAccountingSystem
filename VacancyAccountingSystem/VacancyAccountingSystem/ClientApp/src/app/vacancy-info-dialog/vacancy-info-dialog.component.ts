import {Component, Inject, OnInit} from '@angular/core';
import {Vacancy} from '../models/vacancy';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-vanacy-info-dialog',
  templateUrl: './vacancy-info-dialog.component.html',
  styleUrls: ['./vacancy-info-dialog.component.css']
})
export class VacancyInfoDialogComponent implements OnInit {

  public vacancy: Vacancy;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Vacancy) {
    this.vacancy = data;
  }

  ngOnInit() {
  }

}
