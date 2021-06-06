import {Component, OnInit} from '@angular/core';
import {Specialist} from '../models/specialist';

@Component({
  selector: 'app-requests-list',
  templateUrl: './requests-list.component.html',
  styleUrls: ['./requests-list.component.css']
})
export class RequestsListComponent implements OnInit {

  specialists: Array<Specialist> = [];

  constructor() {
  }

  ngOnInit() {

    this.specialists.push(new Specialist(null, 5000, 5,
      'Kiyv', 'C#', 'B2', 'Full time',
      '0670119497', 'Gomer1245', null, 'Vitaliy', 'Mamontov', 'Middle .Net'));

    this.specialists.push(new Specialist(null, 3000, 5,
      'Kiyv', 'C#', 'B2', 'Full time',
      '0671237658', 'Gomer1245', null, 'Alexander', 'Unhurian', 'Middle .Net'));

    this.specialists.push(new Specialist(null, 650, 5,
      'Kiyv', 'C#', 'B2', 'Full time',
      '0678564758', 'FAVSDA123', null, 'Vadym', 'Forsiuk', 'Junior .Net'));
  }

}
