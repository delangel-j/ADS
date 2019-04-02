import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {Employee} from '../dataservice/employee';
import {dataService} from '../dataservice/data.service';

const ELEMENT_DATA: Employee[] = [
  { employee_key: 'emp1', name: 'Luis Donaldo', lastname: 'Chimal Demanos', level: 1, gender: 'M',
    salary: 10000, email: 'barsald2901@hotmail.com',password: '12345678', hash: 'sdfshtring'},
    { employee_key: 'emp2',name: 'Jesus Alejandro', lastname: 'Del Angel Romero', level: 1, gender: 'M',
    salary: 9000, email: 'dela57@hotmail.com',password: '123456gf', hash: 'dfghjgfdsg'},
    { employee_key: 'emp3', name: 'Cecilia', lastname: 'Alvarez Delgado', level: 2, gender: 'F',
    salary: 8500, email: 'cjadkl23@hotmail.com',password: '34567uh', hash: 'kjhgfdsnbvc'},
    { employee_key: 'emp4', name: 'Pedro Daniel', lastname: 'Reynoso Mendez', level: 1, gender: 'M',
    salary: 9300, email: 'pedr332@gmail.com',password: 'asdfgt43', hash: 'fghjk765rg'},
    { employee_key: 'emp5', name: 'Fernada Elizabet', lastname: 'Morales Cortes', level: 3, gender: 'F',
    salary: 7500, email: 'Fer672f@gmail.com',password: '1234567s', hash: 'gbhnjki654'},
    { employee_key: 'emp6', name: 'Joel', lastname: 'Vazquez Quiroz', level: 2, gender: 'M',
    salary: 5000, email: 'joe931@hotmail.com',password: '654fsdf', hash: 'dsfghjik87'},
    { employee_key: 'emp7', name: 'Luis Axel', lastname: 'Gutierrez Palacios', level: 2, gender: 'M',
    salary: 5500, email: 'axel.chido@gmail.com',password: 'asdfghjd', hash: 'po87ytrjjhg'},
    { employee_key: 'emp8', name: 'Maria Angelica', lastname: 'Rodriguez Bello', level: 3, gender: 'F',
    salary: 6000, email: 'ma_233hd@hotmail.com',password: 'acgfsd35', hash: '76kuy6t5rfv'},
    { employee_key: 'emp9', name: 'Alejandra Elizabet', lastname: 'Mendez Romero', level: 4, gender: 'F',
    salary: 4500, email: 'ale.wejsj@gmail.com',password: '145hgfef', hash: '34567ikhgjg'},
    { employee_key: 'emp10', name: 'Luis Enrique', lastname: 'Elotlan Alvarez', level: 3, gender: 'M',
    salary: 6800, email: 'kike_123@hotmail.com',password: 'ertyuiuy', hash: 'mhgfnk76i9'},];


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent {
  displayedColumns: string[] = ['employee_key', 'name', 'lastname', 'level', 'gender','salary', 'email'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  employees : Employee[];
  getEmployees(): void{
    this.dataService
      .getEmployees()
      .then(employees => this.employees = employees);
  }
  constructor(private dataService: dataService) { }


}
