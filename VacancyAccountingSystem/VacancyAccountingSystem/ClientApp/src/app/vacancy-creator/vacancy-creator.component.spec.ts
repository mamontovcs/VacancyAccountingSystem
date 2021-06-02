import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyCreatorComponent } from './vacancy-creator.component';

describe('VacancyCreatorComponent', () => {
  let component: VacancyCreatorComponent;
  let fixture: ComponentFixture<VacancyCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacancyCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacancyCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
