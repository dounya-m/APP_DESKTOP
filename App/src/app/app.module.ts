import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialExampleModule} from '../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { RouterModule, Routes } from '@angular/router';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { GetEmployeesComponent } from './get-employees/get-employees.component';




const routes: Routes = [
  { path: '', redirectTo: 'Employees', pathMatch: 'full'},
  { path: 'Create', component: NewEmployeeComponent },
  { path: 'Employees', component: GetEmployeesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    NewEmployeeComponent,
    GetEmployeesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


