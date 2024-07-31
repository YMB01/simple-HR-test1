import { TestBed } from '@angular/core/testing';

import { EmployeeInMemDataService } from './employee-in-mem-data.service';

describe('EmployeeInMemDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeInMemDataService = TestBed.get(EmployeeInMemDataService);
    expect(service).toBeTruthy();
  });
});
