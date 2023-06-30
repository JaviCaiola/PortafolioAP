import { TestBed } from '@angular/core/testing';

import { AuthtenticationService } from './authtentication.service';

describe('AuthtenticationService', () => {
  let service: AuthtenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthtenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
