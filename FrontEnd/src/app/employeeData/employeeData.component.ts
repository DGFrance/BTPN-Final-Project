import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import {RefreshService} from 'app/refreshapp.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
	selector: 'employeeData',
	templateUrl: 'employeeData.component.html',
	styleUrls: ['employeeData.component.css']
})

export class EmployeeDataComponent implements OnInit {

  contacts;
	private subscription: Subscription;
  
 constructor(private service: AppService, private RefreshService:RefreshService,) {

  }
	ngOnInit() { 
		 this.service.getAll().subscribe(data => {
      this.contacts = data;
      console.log(this.contacts);
    });

		this.subscription = this.RefreshService.notifyObservable$.subscribe((res) => {
      if (res.hasOwnProperty('option') && res.option === 'refresh') {
       this.contacts = res.value;
      } 
    });
	 }
}