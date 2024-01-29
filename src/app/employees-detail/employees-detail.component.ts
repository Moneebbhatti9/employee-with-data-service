import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Employee } from './../employeeInterface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employees-detail',
  templateUrl: './employees-detail.component.html',
  styleUrls: ['./employees-detail.component.css'],
})
export class EmployeesDetailComponent implements OnInit {
  constructor(
    public employeeService: DataService,
    private route: ActivatedRoute
  ) {}
  @Input() employee: Employee | undefined;

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const employee = +params['id'];
      this.employee = this.employeeService.getEmployeesById(employee);
    });
  }
}
