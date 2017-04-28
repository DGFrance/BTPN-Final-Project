import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';

@Component({
	selector: 'employeeData',
	templateUrl: 'employeeData.component.html',
	styleUrls: ['employeeData.component.css']
})

export class EmployeeDataComponent implements OnInit {

  contacts;
  
 constructor(private service: AppService,) {

  }
	ngOnInit() { 
		 this.service.getAll().subscribe(data => {
      this.contacts = data;
      console.log(this.contacts);
    });
	 }
}