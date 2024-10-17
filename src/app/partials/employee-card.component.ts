import { Component,Input,EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-employee-card',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css']
})

export class EmployeeCardComponent { 

    @Output() childEvent = new EventEmitter<string>(); // Declare an EventEmitter

    @Output() deleteEvent = new EventEmitter<string>(); // Declare an EventEmitter

    @Input() employees: any[] = [];  // Define an Input property

    sendDataToParent(employeeId: string): void {
      this.childEvent.emit(employeeId); // Emit the event
    }

    deleteEmployee(employeeId: string): void {
      this.deleteEvent.emit(employeeId); // Emit the event
    }
}
