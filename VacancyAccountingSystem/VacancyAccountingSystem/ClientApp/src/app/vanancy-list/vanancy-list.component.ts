import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Vacancy} from '../models/vacancy';
import {MatDialog} from '@angular/material';
import {VanacyInfoDialogComponent} from '../vanacy-info-dialog/vanacy-info-dialog.component';

@Component({
  selector: 'app-vanancy-list',
  templateUrl: './vanancy-list.component.html',
  styleUrls: ['./vanancy-list.component.css']
})
export class VanancyListComponent implements OnInit {

  vacancies: Array<Vacancy> = [];

  constructor(private http: HttpClient,
              private infoDialog: MatDialog) {
    this.vacancies.push(new Vacancy('R&D центр Terrasoft Ukraine розширює команду. Шукаємо Full Stack Developer з досвідом розробки на C#, JavaScript і TypeScript.\n' +
      '\n' +
      'Зусилля R&D направлені на розробку інтелектуальної low-code платформи та чотирьох продуктів:\n' +
      '\n' +
      'Studio Creatio — платформа для управління бізнес-процесами.\n' +
      'Sales Creatio — продукт для автоматизації повного циклу продажів.\n' +
      'Marketing Creatio — інструменти для управління маркетинговими кампаніями та комунікаціями.\n' +
      'Service Creatio — рішення для прискорення процесів обслуговування клієнтів.\n' +
      'Команди випускають оновлення кожні 5 тижнів, дотримуючись принципу Continuous Delivery / Continuous Integration. Вихід нових версій Creatio базується на принципах зворотної сумісності, які підтримуються для всіх публічних API та моделей даних.',
      'Middle .Net developer', 'C# SQL', '3000$', 'Luxoft'));
    this.vacancies.push(new Vacancy('R&D центр Terrasoft Ukraine розширює команду. Шукаємо Full Stack Developer з досвідом розробки на C#, JavaScript і TypeScript.\n' +
      '\n' +
      'Зусилля R&D направлені на розробку інтелектуальної low-code платформи та чотирьох продуктів:\n' +
      '\n' +
      'Studio Creatio — платформа для управління бізнес-процесами.\n' +
      'Sales Creatio — продукт для автоматизації повного циклу продажів.\n' +
      'Marketing Creatio — інструменти для управління маркетинговими кампаніями та комунікаціями.\n' +
      'Service Creatio — рішення для прискорення процесів обслуговування клієнтів.\n' +
      'Команди випускають оновлення кожні 5 тижнів, дотримуючись принципу Continuous Delivery / Continuous Integration. Вихід нових версій Creatio базується на принципах зворотної сумісності, які підтримуються для всіх публічних API та моделей даних.',
      'Middle .Net developer', 'C# SQL', '3000$', 'Luxoft'));
    this.vacancies.push(new Vacancy('R&D центр Terrasoft Ukraine розширює команду. Шукаємо Full Stack Developer з досвідом розробки на C#, JavaScript і TypeScript.\n' +
      '\n' +
      'Зусилля R&D направлені на розробку інтелектуальної low-code платформи та чотирьох продуктів:\n' +
      '\n' +
      'Studio Creatio — платформа для управління бізнес-процесами.\n' +
      'Sales Creatio — продукт для автоматизації повного циклу продажів.\n' +
      'Marketing Creatio — інструменти для управління маркетинговими кампаніями та комунікаціями.\n' +
      'Service Creatio — рішення для прискорення процесів обслуговування клієнтів.\n' +
      'Команди випускають оновлення кожні 5 тижнів, дотримуючись принципу Continuous Delivery / Continuous Integration. Вихід нових версій Creatio базується на принципах зворотної сумісності, які підтримуються для всіх публічних API та моделей даних.',
      'Middle .Net developer', 'C# SQL', '3000$', 'Luxoft'));
    this.vacancies.push(new Vacancy('R&D центр Terrasoft Ukraine розширює команду. Шукаємо Full Stack Developer з досвідом розробки на C#, JavaScript і TypeScript.\n' +
      '\n' +
      'Зусилля R&D направлені на розробку інтелектуальної low-code платформи та чотирьох продуктів:\n' +
      '\n' +
      'Studio Creatio — платформа для управління бізнес-процесами.\n' +
      'Sales Creatio — продукт для автоматизації повного циклу продажів.\n' +
      'Marketing Creatio — інструменти для управління маркетинговими кампаніями та комунікаціями.\n' +
      'Service Creatio — рішення для прискорення процесів обслуговування клієнтів.\n' +
      'Команди випускають оновлення кожні 5 тижнів, дотримуючись принципу Continuous Delivery / Continuous Integration. Вихід нових версій Creatio базується на принципах зворотної сумісності, які підтримуються для всіх публічних API та моделей даних.',
      'Middle .Net developer', 'C# SQL', '3000$', 'Luxoft'));

  }

  ngOnInit() {
    // this.http.get('http://localhost:64709/api/vacancies/get').subscribe(response => {
    //   this.vacancies = response;
    // }, error => {
    //   console.log(error);
    // });

  }

  OnMoreClick() {
    const dialog = this.infoDialog.open(VanacyInfoDialogComponent);
  }
}
