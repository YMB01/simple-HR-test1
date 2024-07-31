import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Employee } from '../classes/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeInMemDataService implements InMemoryDbService {
  createDb() {
    let employees: Employee[] = [
      { id: 1, firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', phoneNumber: '555-123-4567', departmentId: 1, salaryId: 1 },
      { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com', phoneNumber: '555-456-7890', departmentId: 2, salaryId: 2 },
      { id: 3, firstName: 'David', lastName: 'Brown', email: 'david.brown@example.com', phoneNumber: '555-789-0123', departmentId: 1, salaryId: 3 },

    ];
    return { employees };
  }
}