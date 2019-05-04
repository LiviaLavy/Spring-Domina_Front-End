import { TestBed } from '@angular/core/testing';

import { PieceServiceService } from './piece-service.service';

describe('PieceServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PieceServiceService = TestBed.get(PieceServiceService);
    expect(service).toBeTruthy();
  });
});
