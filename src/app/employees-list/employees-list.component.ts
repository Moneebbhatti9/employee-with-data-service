import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Employee } from '../employeeInterface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css'],
})
export class EmployeesListComponent implements OnInit {
  constructor(
    public employeeService: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  employees: Employee[] = [];
  selectedEmployee: Employee | undefined;

  ngOnInit() {
    this.employees = this.employeeService.getAllEmloyees();
  }

  showDetails(id: number) {
    this.router.navigate([], {
      queryParams: { id: id },
      queryParamsHandling: 'merge',
    });
  }
}
