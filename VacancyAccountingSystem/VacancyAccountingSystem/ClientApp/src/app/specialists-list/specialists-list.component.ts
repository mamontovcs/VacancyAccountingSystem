import {Component, OnInit} from '@angular/core';
import {Specialist} from '../models/specialist';
import {SpecialistsService} from '../services/specialists.service';

@Component({
  selector: 'app-specialists-list',
  templateUrl: './specialists-list.component.html',
  styleUrls: ['./specialists-list.component.css']
})
export class SpecialistsListComponent implements OnInit {

  specialists: Array<Specialist> = [];
  specialistsView: Array<Specialist> = [];
  public keyWord: string;

  constructor(private specialistsService: SpecialistsService) {
  }

  ngOnInit() {

    this.specialists.push(new Specialist(null, 5000, 5,
      'Kiyv', 'C#', 'B2', 'Full time',
      '0670119497', 'Gomer1245', null, 'Vitaliy', 'Mamontov', 'Middle .Net'));

    this.specialists.push(new Specialist(null, 3000, 5,
      'Kiyv', 'WPF', 'B2', 'Full time',
      '0671237658', 'Gomer1245', null, 'Alexander', 'Unhurian', 'Middle .Net'));

    this.specialists.push(new Specialist(null, 650, 5,
      'Kiyv', 'Java', 'B2', 'Full time',
      '0678564758', 'FAVSDA123', null, 'Vadym', 'Forsiuk', 'Junior .Net'));

    this.specialistsView = this.specialists;
  }

  OnSearchClick(keyWord: string) {
    this.specialistsView = this.specialistsService.FilterSpecialists(keyWord, this.specialists);
  }

}
