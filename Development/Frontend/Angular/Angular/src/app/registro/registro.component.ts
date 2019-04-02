import { Component, OnInit } from '@angular/core';
import {Employee} from './../dataservice/employee';
import {dataService} from './../dataservice/data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  employee = new Employee();

  constructor(private dataService: dataService,
              private router: Router) { }
  
  save(): void {
    this.dataService.createEmployee(this.employee)
    .then(
      () => this.redirect(),
      () => console.log("Error"),
    )
  }
  redirect(){
    this.router.navigate(['/consultar'])
  }
  
  ngOnInit() {
  }

}
