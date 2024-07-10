import { TestBed } from '@angular/core/testing';

import { SuplementoCartService } from './suplemento-cart.service';

describe('SuplementoCartService', () => {
  let service: SuplementoCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuplementoCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
