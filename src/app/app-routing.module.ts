import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './components/create-employees/create-employees.component';
import { ListEmployeesComponent } from './components/list-employees/list-employees.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';


const routes: Routes = [
  { path: "createemployees", component: CreateEmployeeComponent },
  { path: "", component: ListEmployeesComponent },
  { path: "updateemployee", component: UpdateEmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
