import { TestBed, inject } from '@angular/core/testing';

import { PlatService } from './plat.service';

describe('PlatService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlatService]
    });
  });

  it('should be created', inject([PlatService], (service: PlatService) => {
    expect(service).toBeTruthy();
  }));
});
