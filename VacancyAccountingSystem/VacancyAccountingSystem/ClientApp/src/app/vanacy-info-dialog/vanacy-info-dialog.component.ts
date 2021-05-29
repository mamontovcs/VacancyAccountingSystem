import {Component, Inject, OnInit} from '@angular/core';
import {Vacancy} from '../models/vacancy';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-vanacy-info-dialog',
  templateUrl: './vanacy-info-dialog.component.html',
  styleUrls: ['./vanacy-info-dialog.component.css']
})
export class VanacyInfoDialogComponent implements OnInit {

  public vacancy: Vacancy;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Vacancy) {
    // this.vacancy = new Vacancy('R&D центр Luxoft Ukraine розширює команду. Шукаємо Full Stack Developer з досвідом розробки на C#, JavaScript і TypeScript.\n' +
    //   '\n' +
    //   'Зусилля R&D направлені на розробку інтелектуальної low-code платформи та чотирьох продуктів:\n' +
    //   '\n' +
    //   'Studio Creatio — платформа для управління бізнес-процесами.\n' +
    //   'Sales Creatio — продукт для автоматизації повного циклу продажів.\n' +
    //   'Marketing Creatio — інструменти для управління маркетинговими кампаніями та комунікаціями.\n' +
    //   'Service Creatio — рішення для прискорення процесів обслуговування клієнтів.\n' +
    //   'Команди випускають оновлення кожні 5 тижнів, дотримуючись принципу Continuous Delivery / Continuous Integration. Вихід нових версій Creatio базується на принципах зворотної сумісності, які підтримуються для всіх публічних API та моделей даних.',
    //   'Middle .Net developer', 'C# SQL', 'a lot of cool things', 5000, 'Luxoft');

    this.vacancy = data;
  }

  ngOnInit() {
  }

}
