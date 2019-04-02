import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {dataService} from './../dataservice/data.service';
import {Employee} from './../dataservice/employee';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  employees : Employee[];

  constructor(private dataService: dataService, private router: Router) { }

  ngOnInit() {
  }
  loginUser(e) {
  	e.preventDefault();
  	console.log(e);
  	var username = e.target.elements[0].value;
  	var password = e.target.elements[1].value;
  	if(username == 'emp1' && password == '12345678') {
  		this.router.navigate(['main']);
  	}
  }

}