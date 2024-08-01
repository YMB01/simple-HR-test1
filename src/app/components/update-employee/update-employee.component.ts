import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { HttpClientEmployeeService } from 'src/app/services/http-client-employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { EmployeeTransferService } from 'src/app/services/employee-transfer.service';
import { Employee } from 'src/app/classes/employee';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit, OnDestroy {

  updateEmployeeForm = new FormGroup({
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
    private router: Router,
    private route: ActivatedRoute,
    private employeeTransferService: EmployeeTransferService) { }


  ngOnInit() {

    const employee = this.employeeTransferService.getEmployee();
    this.updateEmployeeForm.setValue({
      id: employee.id,
      firstName: employee.firstName,
      lastName: employee.lastName,
      email: employee.email,
      phoneNumber: employee.phoneNumber,
      departmentId: employee.departmentId,
      salaryId: employee.salaryId,
    });


  }

  ngOnDestroy(): void {
    if (this.employeeSubscription) {
      this.employeeSubscription.unsubscribe();
    }
  }

  updateEmployee() {

    if (this.updateEmployeeForm.valid) {
      // get the id and convert to a number
      const idstr = this.updateEmployeeForm.get('id').value;
      const id = +idstr;

      const firstName = this.updateEmployeeForm.get('firstName').value;
      const lastName = this.updateEmployeeForm.get('lastName').value;
      const email = this.updateEmployeeForm.get('email').value;
      const phoneNumber = this.updateEmployeeForm.get('phoneNumber').value;
      const departmentId = this.updateEmployeeForm.get('departmentId').value;
      const salaryId = this.updateEmployeeForm.get('salaryId').value;

      const employee = new Employee(id, firstName, lastName, email, phoneNumber, departmentId, salaryId);

      this.employeeSubscription = this.employeeService.updateEmployee(employee).subscribe();

      this.router.navigateByUrl("/");
    }
  }

}