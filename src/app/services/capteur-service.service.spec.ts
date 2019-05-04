import { TestBed } from '@angular/core/testing';

import { CapteurServiceService } from './capteur-service.service';

describe('CapteurServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CapteurServiceService = TestBed.get(CapteurServiceService);
    expect(service).toBeTruthy();
  });
});
