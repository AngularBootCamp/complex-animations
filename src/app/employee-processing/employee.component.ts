import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { changeStatus, staggerList } from '../animations';

import {
  Employee,
  EmployeeLoaderService
} from './employee-loader.service';

@Component({
  selector: 'employee-component',
  templateUrl: './employee.component.html',
  animations: [changeStatus, staggerList]
})
export class EmployeeComponent {
  employees: Observable<Employee[]>;
  status = 'New';

  constructor(svc: EmployeeLoaderService) {
    this.employees = svc.loadEmployees();
  }

  statusChange() {
    if (this.status === 'New') {
      this.status = 'In Progress';
    } else if (this.status === 'In Progress') {
      this.status = 'In Review';
    } else if (this.status === 'In Review') {
      this.status = 'Complete';
    } else {
      this.status = 'New';
    }
  }
}
