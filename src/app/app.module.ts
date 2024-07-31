import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { EmployeeInMemDataService } from './services/employee-in-mem-data.service'; // Renamed service

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    environment.production ?
      [] : InMemoryWebApiModule.forRoot(EmployeeInMemDataService) // Renamed service
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }