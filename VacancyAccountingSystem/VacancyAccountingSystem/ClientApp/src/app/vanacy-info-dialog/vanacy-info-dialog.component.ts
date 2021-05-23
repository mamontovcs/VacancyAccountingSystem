import { Component, OnInit } from '@angular/core';
import {Vacancy} from '../models/vacancy';

@Component({
  selector: 'app-vanacy-info-dialog',
  templateUrl: './vanacy-info-dialog.component.html',
  styleUrls: ['./vanacy-info-dialog.component.css']
})
export class VanacyInfoDialogComponent implements OnInit {

  vacancy: Vacancy;

  constructor() { }

  ngOnInit() {
  }

}
