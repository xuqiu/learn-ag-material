import { TestBed, inject } from '@angular/core/testing';

import { SoupuiService } from './soupui.service';

describe('SoupuiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SoupuiService]
    });
  });

  it('should be created', inject([SoupuiService], (service: SoupuiService) => {
    expect(service).toBeTruthy();
  }));
});
