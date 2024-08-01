import { Employee } from '../classes/employee';
import { Observable } from 'rxjs';

export abstract class EmployeeService {
  employeesUrl = 'api/employees';

  abstract getEmployees(): Observable<Employee[]>;
  abstract getEmployee(id: number): Observable<Employee>;
  abstract addEmployee(id: number, firstName: string, lastName: string, email: string, phoneNumber: string, departmentId: number, salaryId: number): Observable<Employee>;
  abstract deleteEmployee(employee: Employee | number): Observable<Employee>;
  abstract searchEmployee(term: string): Observable<Employee[]>;
  abstract updateEmployee(employee: Employee): Observable<Employee>;
}