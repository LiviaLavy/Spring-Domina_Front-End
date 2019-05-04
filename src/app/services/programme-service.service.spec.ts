import { TestBed } from '@angular/core/testing';

import { ProgrammeServiceService } from './programme-service.service';

describe('ProgrammeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProgrammeServiceService = TestBed.get(ProgrammeServiceService);
    expect(service).toBeTruthy();
  });
});
