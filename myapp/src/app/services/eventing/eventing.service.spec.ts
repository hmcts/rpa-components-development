import { TestBed, inject } from '@angular/core/testing';

import { EventingService } from './eventing.service';

describe('EventingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventingService]
    });
  });

  it('should be created', inject([EventingService], (service: EventingService) => {
    expect(service).toBeTruthy();
  }));
});
