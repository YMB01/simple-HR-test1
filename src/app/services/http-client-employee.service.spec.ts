import { TestBed } from '@angular/core/testing';

import { HttpClientEmployeeService } from './http-client-employee.service';

describe('HttpClientEmployeeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpClientEmployeeService = TestBed.get(HttpClientEmployeeService);
    expect(service).toBeTruthy();
  });
});
