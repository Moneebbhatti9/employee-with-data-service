import { Injectable } from '@angular/core';
import { Employee, employeeData } from './employeeInterface';

@Injectable()
export class DataService {
  constructor() {}

  public employees = employeeData;

  getAllEmloyees() {
    return this.employees;
  }

  getEmployeesById(id: number): Employee | undefined {
    return this.employees.find((employee) => employee.id === id);
  }
}
