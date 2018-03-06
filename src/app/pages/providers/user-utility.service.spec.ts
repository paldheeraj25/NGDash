import { TestBed, inject } from '@angular/core/testing';

import { UserUtilityService } from './user-utility.service';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserUtilityService]
    });
  });

  it('should be created', inject([UserUtilityService], (service: UserUtilityService) => {
    expect(service).toBeTruthy();
  }));
});
