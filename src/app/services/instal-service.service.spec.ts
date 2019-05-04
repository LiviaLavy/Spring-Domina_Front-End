import { TestBed } from '@angular/core/testing';

import { InstalServiceService } from './instal-service.service';

describe('InstalServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InstalServiceService = TestBed.get(InstalServiceService);
    expect(service).toBeTruthy();
  });
});
