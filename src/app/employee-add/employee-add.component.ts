import { Component } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-employee-add',
  standalone: true,
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css'],
  imports: [ReactiveFormsModule,CommonModule]  // <-- Import ReactiveFormsModule here
})
export class EmployeeAddComponent {
  employeeForm: FormGroup;

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.employeeForm = this.fb.group({
      emp_name: ['', Validators.required],
      emp_email: ['', [Validators.required, Validators.email]],
      experience: ['', Validators.required],
      emp_salary: ['', Validators.required],
      dept_code: ['', Validators.required],
      joining_date: ['', Validators.required],
      secrete_code: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      this.employeeService.addEmployee(this.employeeForm.value).subscribe(() => {
        this.router.navigate(['/employees']);
      });
    }
  }
}
