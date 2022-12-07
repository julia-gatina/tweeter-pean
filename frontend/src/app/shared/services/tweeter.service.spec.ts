import { TestBed } from '@angular/core/testing';

import { TweeterService } from './tweeter.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TweeterService', () => {
  let service: TweeterService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(TweeterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
