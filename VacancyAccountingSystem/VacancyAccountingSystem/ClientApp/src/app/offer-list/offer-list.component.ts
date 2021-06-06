import {Component, OnInit} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Vacancy} from '../models/vacancy';
import {Company} from '../models/company';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.css']
})
export class OfferListComponent implements OnInit {

  offeredVacancies: Array<Vacancy> = [];

  constructor(private _snackBar: MatSnackBar) {
  }

  ngOnInit() {

    this.offeredVacancies.push(new Vacancy('R&D центр Terrasoft Ukraine розширює команду. Шукаємо Full Stack Developer з досвідом розробки на C#, JavaScript і TypeScript.\n' +
      '\n' +
      'Зусилля R&D направлені на розробку інтелектуальної low-code платформи та чотирьох продуктів:\n' +
      '\n' +
      'Studio Creatio — платформа для управління бізнес-процесами.\n' +
      'Sales Creatio — продукт для автоматизації повного циклу продажів.\n' +
      'Marketing Creatio — інструменти для управління маркетинговими кампаніями та комунікаціями.\n' +
      'Service Creatio — рішення для прискорення процесів обслуговування клієнтів.\n' +
      'Команди випускають оновлення кожні 5 тижнів, дотримуючись принципу Continuous Delivery / Continuous Integration. Вихід нових версій Creatio базується на принципах зворотної сумісності, які підтримуються для всіх публічних API та моделей даних.',
      'Middle .Net developer', 'C# SQL', 'many cool things', 3300, new Company(undefined, 'Terrasoft', undefined, '', '')));
    this.offeredVacancies.push(new Vacancy('One of the world\'s largest providers of products and services to the energy industry has a need to develop and support enterprise information system in Oil & Gas domain.\n' +
      'Project is related to collection, visualization and analysis (including real-time) of the data received from production and test wells evaluation.',
      'Senior .Net developer', 'C# SQL Angular Docker', 'nothing', 3000, new Company(undefined, 'Luxoft', undefined, '', '')));
    this.offeredVacancies.push(new Vacancy('Intern for Oil and Gas project',
      'Intern .Net developer', 'C# SQL WPF', 'medical insurance', 250, new Company(undefined, 'Luxoft', undefined, '', '')));
  }

  Apply() {
    this._snackBar.open('Offer appling will be added soon!', 'Close');
  }
}
