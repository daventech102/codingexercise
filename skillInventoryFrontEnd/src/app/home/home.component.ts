import { Component, OnInit } from '@angular/core';
import { EmployeesComponent } from '../employees/employees.component';
import { MyskillsComponent } from '../my-skills/my-skills.component'; 
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
