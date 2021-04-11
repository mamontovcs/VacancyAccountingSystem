import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VanancyListComponent } from './vanancy-list.component';

describe('VanancyListComponent', () => {
  let component: VanancyListComponent;
  let fixture: ComponentFixture<VanancyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VanancyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VanancyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
