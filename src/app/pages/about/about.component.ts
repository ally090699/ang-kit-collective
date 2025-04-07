import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';
import { Employees, Employee } from '../../../db-data';
import { EmployeeCardComponent } from '../../components/employee-card/employee-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [EmployeeCardComponent, CommonModule],
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.sass'
})
export class AboutComponent {
  img1 = "https://images.pexels.com/photos/2767667/pexels-photo-2767667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
  img2 = "https://images.pexels.com/photos/5642831/pexels-photo-5642831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

  employees: Employee[] = Employees;
}
