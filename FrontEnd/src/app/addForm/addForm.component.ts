import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { AppService } from 'app/app.service'
import { RefreshService } from 'app/refreshapp.service';
import { Subscription } from 'rxjs/Subscription';
import { DatePipe } from '@angular/common';

@Component({
	selector: 'addForm',
	templateUrl: 'addForm.component.html',
	styleUrls: ['./addForm.component.css'] 
})

export class AddFormComponent implements OnInit {
  contactForm
  private subscription: Subscription
  constructor(
  private formBuilder: FormBuilder,
  private refreshService: RefreshService, 
  private service:AppService,
  private datepipe: DatePipe,
  ) { }

 statuss = [
    {value: 'Married', viewValue: 'Married'},
    {value: 'Single', viewValue: 'Single'},
  ];

   genders = [
    {value: 'Male', viewValue: 'Male'},
    {value: 'Female', viewValue: 'Female'},
  ];

   maritals = [
    {value: 'Divorced', viewValue: 'Divorced'},
    {value: 'Widowed', viewValue: 'Widowed'},
    {value: 'Married', viewValue: 'Married'},
    {value: 'Single', viewValue: 'Single'},
  ];

  divisions = [
    {value: 'SE', viewValue: 'SE'},
    {value: 'SQ', viewValue: 'SQ'},
	{value: 'TS', viewValue: 'TS'},
	{value: 'AC', viewValue: 'AC'},
  ];

  grades = [
    {value: 'JP', viewValue: 'JP'},
    {value: 'PG', viewValue: 'PG'},
	{value: 'AP', viewValue: 'AP'},
	{value: 'AN', viewValue: 'AN'},
  ];
	ngOnInit() { 
     this.contactForm = this.formBuilder.group({
      firstName: this.formBuilder.control(''),
      lastName: this.formBuilder.control(''),
      gender: this.formBuilder.control(''),
      dateOfBirth: this.formBuilder.control(''),
      nationality: this.formBuilder.control(''),
      maritalStatus: this.formBuilder.control(''),
      phone: this.formBuilder.control(''),
      subDivision: this.formBuilder.control(''),
      status: this.formBuilder.control(''),
      suspendDate: this.formBuilder.control(''),
      hiredDate: this.formBuilder.control(''),
      grade: this.formBuilder.control(''),
      division: this.formBuilder.control(''),
      email: this.formBuilder.control(''),
      location: this.formBuilder.control(''),
});
     this.subscription = this.refreshService.notifyObservable$.subscribe((res) => {
      if (res.hasOwnProperty('option') && res.option === 'reset') {
        this.contactForm.reset();
      }
      else if (res.hasOwnProperty('option') && res.option === 'showToForm') {
        let value = "";
        let data=res.value;
        console.log(data);
        this.contactForm.controls['firstName'].setValue(data.firstName);
        this.contactForm.controls['lastName'].setValue(data.lastName);
        this.contactForm.controls['gender'].setValue(data.gender);
        
        var empDob = new Date(data.dateOfBirth);
        value = this.datepipe.transform(empDob, 'yyyy-MM-dd');
        this.contactForm.controls['dateOfBirth'].setValue(value);
        
        this.contactForm.controls['nationality'].setValue(data.nationality);
        this.contactForm.controls['maritalStatus'].setValue(data.maritalStatus);
        this.contactForm.controls['phone'].setValue(data.phone);
        this.contactForm.controls['status'].setValue(data.status);
        
        var empSuspend = new Date(data.suspendDate);
        value = this.datepipe.transform(empSuspend, 'yyyy-MM-dd');
        this.contactForm.controls['suspendDate'].setValue(value);
        
        var empHrd = new Date(data.hiredDate);
        value = this.datepipe.transform(empHrd, 'yyyy-MM-dd');
        this.contactForm.controls['hiredDate'].setValue(value);

        this.contactForm.controls['grade'].setValue(data.grade);
        this.contactForm.controls['division'].setValue(data.division);
        this.contactForm.controls['subDivision'].setValue(data.subDivision);
        this.contactForm.controls['email'].setValue(data.email);
        this.contactForm.controls['location'].setValue(data.location);

      }
    }
    )
}
  }

