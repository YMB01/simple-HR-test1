import { Component, OnInit } from '@angular/core';
import { HttpClientEmployeeService } from 'src/app/services/http-client-employee.service';
import { Employee } from 'src/app/classes/employee';
import { Router } from "@angular/router";
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees: Employee[] = [];
  employeeSubscription: Subscription;

  constructor(private employeeService: HttpClientEmployeeService,
    private router: Router) { }

  ngOnInit() {
    this.getEmployees();
  }
  ngOnDestory(): void {
    this.employeeSubscription.unsubscribe();
  }

  getEmployees() {
    this.employeeSubscription = this.employeeService.getEmployees().subscribe(data => {
      this.employees = data;
    });
  }
  toCreateemployee() {
    this.router.navigateByUrl("/createemployees");
  }
}