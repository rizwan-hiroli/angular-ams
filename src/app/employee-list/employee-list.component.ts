import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { EmployeeCardComponent } from '../partials/employee-card.component'; // Import your navbar component

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,EmployeeCardComponent],
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: any[] = [];

  employeeName: string = '';  // Bind this to the input field

  constructor(private employeeService: EmployeeService, public router: Router) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    this.employeeService.getEmployees().subscribe(data => {
      this.employees = data;
    });
  }

  searchEmployees(name: string): void {
    if(name !=''){
      this.employeeService.searchEmployees(name).subscribe(data => {
        this.employees = data;
      });
    }
  }

  deleteEmployee(id: string): void {
    this.employeeService.deleteEmployee(id).subscribe(() => {
      this.getEmployees(); // Refresh the list after deletion
    });
  }

  editEmployee(id: string): void {
    this.router.navigate(['/employees/edit', id]);
  }
}
