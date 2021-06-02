import { TestBed, async, inject } from '@angular/core/testing';

import { CurrentUserSpecialistGuard } from './current-user-specialist.guard';

describe('CurrentUserSpecialistGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrentUserSpecialistGuard]
    });
  });

  it('should ...', inject([CurrentUserSpecialistGuard], (guard: CurrentUserSpecialistGuard) => {
    expect(guard).toBeTruthy();
  }));
});
