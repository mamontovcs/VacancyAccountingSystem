import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-vanancy-list',
  templateUrl: './vanancy-list.component.html',
  styleUrls: ['./vanancy-list.component.css']
})
export class VanancyListComponent implements OnInit {

  vacancies: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('http://localhost:64709/api/vacancies/get').subscribe(response => {
      this.vacancies = response;
    }, error => {
      console.log(error);
    });
  }

}
