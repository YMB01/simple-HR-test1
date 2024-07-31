import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Employee } from '../classes/employee';
import { EmployeeService } from './employee.service';

const cudOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable()
export class HttpClientEmployeeService extends EmployeeService {

  constructor(private http: HttpClient) {
    super();
  }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeesUrl).pipe(
      catchError(this.handleError)
    );
  }

  // get by id - will 404 when id not found
  getEmployee(id: number): Observable<Employee> {
    const url = `${this.employeesUrl}/${id}`;
    return this.http.get<Employee>(url).pipe(
      catchError(this.handleError)
    );
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.employeesUrl, employee, cudOptions).pipe(
      catchError(this.handleError)
    );
  }

  deleteEmployee(employee: number | Employee): Observable<Employee> {
    const id = typeof employee === 'number' ? employee : employee.id;
    const url = `${this.employeesUrl}/${id}`;

    return this.http.delete<Employee>(url, cudOptions).pipe(
      catchError(this.handleError)
    );
  }

  searchEmployee(term: string): Observable<Employee[]> {
    term = term.trim();
    // add safe, encoded search parameter if term is present
    const options = term ?
      { params: new HttpParams().set('name', term) } : {};

    return this.http.get<Employee[]>(this.employeesUrl, options).pipe(
      catchError(this.handleError)
    );
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(this.employeesUrl, employee, cudOptions).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) {
    console.error(error);
    return throwError(error);
  }

}