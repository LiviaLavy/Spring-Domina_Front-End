import { TestBed } from '@angular/core/testing';

import { ConsommationServiceService } from './consommation-service.service';

describe('ConsommationServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsommationServiceService = TestBed.get(ConsommationServiceService);
    expect(service).toBeTruthy();
  });
});
