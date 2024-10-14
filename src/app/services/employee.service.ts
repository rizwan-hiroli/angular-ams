import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'http://localhost:4000/employees'; // Your API endpoint

  constructor(private http: HttpClient) {}

  // Get all employees
  getEmployees(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  // Get employee by ID
  getEmployeeById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // Add a new employee
  addEmployee(employee: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, employee);
  }

  // Update an employee
  updateEmployee(id: string, employee: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, employee);
  }

  // Delete an employee
  deleteEmployee(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // search an employee
  searchEmployees(name: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/search/${name}`);
  }
}
