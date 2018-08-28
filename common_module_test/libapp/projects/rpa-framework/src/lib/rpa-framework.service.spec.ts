import { TestBed, inject } from '@angular/core/testing';

import { RpaFrameworkService } from './rpa-framework.service';

describe('RpaFrameworkService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RpaFrameworkService]
    });
  });

  it('should be created', inject([RpaFrameworkService], (service: RpaFrameworkService) => {
    expect(service).toBeTruthy();
  }));
});
