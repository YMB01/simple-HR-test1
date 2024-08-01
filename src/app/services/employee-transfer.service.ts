import { Injectable } from '@angular/core';
import { Employee } from '../classes/employee';

@Injectable({
    providedIn: 'root'
})
export class EmployeeTransferService {

    private employee: Employee;

    constructor() { }

    setEmployee(employee: Employee) {
        this.employee = employee;
    }

    getEmployee() {
        const tempEmployee = this.employee;
        this.clearEmployee();
        return tempEmployee;
    }

    clearEmployee() {
        this.employee = undefined;
    }
}