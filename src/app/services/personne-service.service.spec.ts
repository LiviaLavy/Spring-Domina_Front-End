import { TestBed } from '@angular/core/testing';

import { PersonneServiceService } from './personne-service.service';

describe('PersonneServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonneServiceService = TestBed.get(PersonneServiceService);
    expect(service).toBeTruthy();
  });
});
