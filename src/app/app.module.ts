import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { EmployeeInMemDataService } from './services/employee-in-mem-data.service';
import { ListEmployeesComponent } from './components/list-employees/list-employees.component'; // Renamed service
import { HttpClientEmployeeService } from './services/http-client-employee.service';
import { CreateEmployeeComponent } from './components/create-employees/create-employees.component';

import { ReactiveFormsModule } from '@angular/forms';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    environment.production ?
      [] : InMemoryWebApiModule.forRoot(EmployeeInMemDataService),

  ],
  providers: [HttpClientEmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }