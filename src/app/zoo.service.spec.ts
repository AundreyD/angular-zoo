import { TestBed, inject } from '@angular/core/testing';

import { ZooService } from './zoo.service';

describe('ZooService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZooService]
    });
  });

  it('should ...', inject([ZooService], (service: ZooService) => {
    expect(service).toBeTruthy();
  }));
});
