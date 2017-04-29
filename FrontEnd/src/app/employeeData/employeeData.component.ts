import { Component, OnInit, Input } from '@angular/core';
import {AppService} from '../app.service';
import {RefreshService} from 'app/refreshapp.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
	selector: 'employeeData',
	templateUrl: 'employeeData.component.html',
	styleUrls: ['employeeData.component.css']
})

export class EmployeeDataComponent implements OnInit {
  selectedEmployee;
  contacts;
  none = false;
  
	private subscription: Subscription;
  
 constructor(private service: AppService, private RefreshService:RefreshService,) {

  }
	ngOnInit() { 
		 this.service.getAll().subscribe(data => {
      this.contacts = data;
    });

		this.subscription = this.RefreshService.notifyObservable$.subscribe((res) => {
      if (res.hasOwnProperty('option') && res.option === 'refresh') {
       this.contacts = res.value;

       if (this.contacts == ""){
         this.none = true;
       }
       else{
         this.none= false;
       }
      } 
    });
	 }
   
   onClick(empId) {
     this.selectedEmployee = empId;
    this.service.getContactById(empId)
      .subscribe(data => {
        this.RefreshService.notifyOther({ option: "showToForm", value: data });
});
}
    isSelected(employee)
    {
        let flag = false;
        if (employee != null && this.selectedEmployee != null)
        {
            if (employee.empId === this.selectedEmployee)
            {
                flag = true;
            }
        }
        return flag;
}
}