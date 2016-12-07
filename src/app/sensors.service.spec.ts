/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SensorsService } from './sensors.service';

describe('SensorsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SensorsService]
    });
  });

  it('should ...', inject([SensorsService], (service: SensorsService) => {
    expect(service).toBeTruthy();
  }));
});
