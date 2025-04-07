import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee } from '../../../db-data';

@Component({
  selector: 'employee-card',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './employee-card.component.html',
  styleUrl: './employee-card.component.sass'
})
export class EmployeeCardComponent {
  @Input() employee!: Employee;
  @Input() index!: number;
}
