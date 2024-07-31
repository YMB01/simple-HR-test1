import { Component, OnInit } from '@angular/core';
import { HttpClientEmployeeService } from 'src/app/services/http-client-employee.service';
import { Employee } from 'src/app/classes/employee';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees: Employee[] = [];

  constructor(private employeeService: HttpClientEmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe(data => {
      this.employees = data;
    });
  }
}