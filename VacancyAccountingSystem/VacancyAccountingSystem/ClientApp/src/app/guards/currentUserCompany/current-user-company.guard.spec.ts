import { TestBed, async, inject } from '@angular/core/testing';

import { CurrentUserGuard } from './current-user-company.guard';

describe('CurrentUserGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrentUserGuard]
    });
  });

  it('should ...', inject([CurrentUserGuard], (guard: CurrentUserGuard) => {
    expect(guard).toBeTruthy();
  }));
});
