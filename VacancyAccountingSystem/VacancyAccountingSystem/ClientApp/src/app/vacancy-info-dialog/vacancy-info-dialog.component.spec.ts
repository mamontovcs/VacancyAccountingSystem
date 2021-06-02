import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacancyInfoDialogComponent } from './vacancy-info-dialog.component';

describe('VanacyInfoDialogComponent', () => {
  let component: VacancyInfoDialogComponent;
  let fixture: ComponentFixture<VacancyInfoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacancyInfoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacancyInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
