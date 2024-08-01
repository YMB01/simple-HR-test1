import { Component, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClientEmployeeService } from 'src/app/services/http-client-employee.service';
import { Router } from "@angular/router";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employees.component.html',
  styleUrls: ['./create-employees.component.css']
})
export class CreateEmployeeComponent implements OnDestroy {

  createEmployeeForm = new FormGroup({
    id: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl(''),
    departmentId: new FormControl(''),
    salaryId: new FormControl('')
  });

  employeeSubscription: Subscription;

  constructor(private employeeService: HttpClientEmployeeService,
    private router: Router) { }

  ngOnDestroy(): void {
    if (this.employeeSubscription) {
      this.employeeSubscription.unsubscribe();
    }
  }

  createEmployee() {

    if (this.createEmployeeForm.valid) {
      const id = this.createEmployeeForm.get('id').value;
      const firstName = this.createEmployeeForm.get('firstName').value;
      const lastName = this.createEmployeeForm.get('lastName').value;
      const email = this.createEmployeeForm.get('email').value;
      const phoneNumber = this.createEmployeeForm.get('phoneNumber').value;
      const departmentId = this.createEmployeeForm.get('departmentId').value;
      const salaryId = this.createEmployeeForm.get('salaryId').value;

      this.employeeSubscription = this.employeeService.addEmployee(id, firstName, lastName, email, phoneNumber, departmentId, salaryId).subscribe();

      this.router.navigateByUrl("/");
    }
  }

}