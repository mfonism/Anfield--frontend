import { TestBed } from '@angular/core/testing';

import { UserIsSignedInGuard } from './auth.guard';

describe('UserIsSignedInGuard', () => {
  let guard: UserIsSignedInGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserIsSignedInGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
