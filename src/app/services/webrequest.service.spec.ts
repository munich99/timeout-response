/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WebrequestService } from './webrequest.service';

describe('Service: Timerequest', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebrequestService]
    });
  });

  it('should ...', inject([WebrequestService], (service: WebrequestService) => {
    expect(service).toBeTruthy();
  }));
});
