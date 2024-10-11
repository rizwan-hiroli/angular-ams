
import { appConfig } from './app/app.config';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';
import { EmployeeListComponent } from './app/employee-list/employee-list.component';
import { EmployeeAddComponent } from './app/employee-add/employee-add.component';
import { EmployeeEditComponent } from './app/employee-edit/employee-edit.component';
import { provideRouter, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/employees', pathMatch: 'full' },  // Set pathMatch as 'full'
  { path: 'employees', component: EmployeeListComponent },
  { path: 'employees/add', component: EmployeeAddComponent },
  { path: 'employees/edit/:id', component: EmployeeEditComponent },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),      // Provide the routes here
    provideHttpClient(),        // Add HttpClient support
    provideAnimations()         // Add animations support (if needed)
  ]
}).catch(err => console.error(err));

