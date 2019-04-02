import { Component, OnInit } from '@angular/core';
import {dataService} from './../dataservice/data.service';
import {Employee} from './../dataservice/employee';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  employees : Employee[];

  getEmployees(): void{
    this.dataService
      .getEmployees()
      .then(employees => this.employees = employees);
  }
  delete(emp: Employee): void{
    this.dataService.deleteEmployee(emp.employee_key);
    this.employees = this.employees.filter(e => e !== emp);
  }
  
  constructor(private dataService: dataService) { }

  ngOnInit() {
    this.getEmployees();
    console.log(this.employees);
  }

}
