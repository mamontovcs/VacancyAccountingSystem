import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VanacyInfoDialogComponent } from './vanacy-info-dialog.component';

describe('VanacyInfoDialogComponent', () => {
  let component: VanacyInfoDialogComponent;
  let fixture: ComponentFixture<VanacyInfoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VanacyInfoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VanacyInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
