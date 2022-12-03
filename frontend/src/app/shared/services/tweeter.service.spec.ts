import { TestBed } from '@angular/core/testing';

import { TweeterService } from './tweeter.service';

describe('TweeterService', () => {
  let service: TweeterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TweeterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
