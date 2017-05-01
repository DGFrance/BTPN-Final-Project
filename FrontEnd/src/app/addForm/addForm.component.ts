import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { AppService } from 'app/app.service'
import { RefreshService } from 'app/refreshapp.service';
import { Subscription } from 'rxjs/Subscription';
import { DatePipe } from '@angular/common';
import { Employee } from "app/employee.model";
import { Location } from "app/location.model";
import { MdDialog } from '@angular/material';
import { DeleteComponent } from 'app/delete/delete.component';
import { SafeUrl } from 'app/safeUrl.pipe';
import {MdSnackBar} from '@angular/material';
import {SubmitPopupComponent} from 'app/submitPopup/submitPopup.component';


@Component({
  selector: 'addForm',
  templateUrl: 'addForm.component.html',
  styleUrls: ['./addForm.component.css']
})

export class AddFormComponent implements OnInit {
  contactForm;
  contacts;
  contact;
  photo;
  image;
  employee: Employee;
  location: Location;
  locations: Location[];
  employeeId = null;
  idContact;
  deleteHidden;
  isShow = false;
  public snackBar: MdSnackBar;
  private subscription: Subscription;
  constructor(
    private formBuilder: FormBuilder,
    public refreshService: RefreshService,
    private service: AppService,
    private datepipe: DatePipe,
    public dialog: MdDialog,
  ) { }

openSnackBar() {
    this.snackBar.openFromComponent(SubmitPopupComponent, {
      duration: 500,
    });
  }

  statuss = [
    { value: 'Married', viewValue: 'Married' },
    { value: 'Single', viewValue: 'Single' },
  ];

  genders = [
    { value: 'Male', viewValue: 'Male' },
    { value: 'Female', viewValue: 'Female' },
  ];

  maritals = [
    { value: 'Divorced', viewValue: 'Divorced' },
    { value: 'Widowed', viewValue: 'Widowed' },
    { value: 'Married', viewValue: 'Married' },
    { value: 'Single', viewValue: 'Single' },
  ];

  divisions = [
    { value: 'SE', viewValue: 'SE' },
    { value: 'SQ', viewValue: 'SQ' },
    { value: 'TS', viewValue: 'TS' },
    { value: 'AC', viewValue: 'AC' },
  ];

  grades = [
    { value: 'JP', viewValue: 'JP' },
    { value: 'PG', viewValue: 'PG' },
    { value: 'AP', viewValue: 'AP' },
    { value: 'AN', viewValue: 'AN' },
  ];

  ngOnInit() {

    this.service.getLocations()
      .subscribe(response => {

        this.locations = response

      });

    this.contactForm = this.formBuilder.group({
      firstName: this.formBuilder.control('', Validators.compose([Validators.required, Validators.pattern('[\\w\\-\\s\\/]+')])),
      lastName: this.formBuilder.control('', Validators.compose([Validators.required, Validators.pattern('[\\w\\-\\s\\/]+')])),
      gender: this.formBuilder.control('', Validators.compose([Validators.required])),
      dateOfBirth: this.formBuilder.control('', Validators.compose([Validators.required])),
      nationality: this.formBuilder.control('', Validators.compose([Validators.required])),
      maritalStatus: this.formBuilder.control('', Validators.compose([Validators.required])),
      phone: this.formBuilder.control('', Validators.compose([Validators.required, Validators.pattern(/^[0-9\(\)\-\+]{5,25}$/)])),
      subDivision: this.formBuilder.control('', Validators.compose([Validators.required])),
      status: this.formBuilder.control('', Validators.compose([Validators.required])),
      suspendDate: this.formBuilder.control('', Validators.compose([Validators.required])),
      hiredDate: this.formBuilder.control('', Validators.compose([Validators.required])),
      grade: this.formBuilder.control('', Validators.compose([Validators.required])),
      division: this.formBuilder.control('', Validators.compose([Validators.required])),
      email: this.formBuilder.control('', Validators.compose([Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])),
      location: this.formBuilder.control('', Validators.compose([Validators.required])),
    });
    this.photo = "src/images/no-image.png";
    this.subscription = this.refreshService.notifyObservable$.subscribe((res) => {
      if (res.hasOwnProperty('option') && res.option === 'reset') {
        this.contactForm.reset();
        this.isShow = true;
      }

      else if (res.hasOwnProperty('option') && res.option === 'showDelete') {
        this.deleteHidden = res.value;
      }
      else if (res.hasOwnProperty('option') && res.option === 'showToForm') {
        this.isShow = true;
        let value = "";
        let data = res.value;
        this.employeeId = data.empId;
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
        this.contactForm.controls['location'].setValue(data.location.id);
     
     if (data.photo != null) {
          this.photo = data.photo;
        }
        else {
          this.photo = "src/app/no-image.png";
        }

      }
      else if (res.hasOwnProperty('option') && res.option === 'resetForm') {
        this.employeeId = null;
        this.contactForm.reset();
        this.photo = "src/app/no-image.png";
        this.isShow = false;
    
      }
    }
    )
  }


  reset() {
    this.contactForm.reset();
    this.photo = "src/images/no-image.png";
    this.isShow = true;
    
  }
  chooseImage(event) {
    console.log("a")
    this.image = event.target.files;
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.photo = event.target.result;

    }

    reader.readAsDataURL(event.target.files[0]);

  }


  onSubmit(employee) {
    const location: Location = {
      id: employee.location,
      city: ''
    };
    employee.location = location;

    if (this.photo != "src/app/no-image.png" && this.photo != null) {
      employee.photo = this.photo;
    }

    if (this.employeeId == null) {
      this.service.addEmployee(employee).subscribe(() => {

        this.refreshService.notifyOther({ option: 'add', value: "" });
        this.isShow = false;
      });
    }
    else {
      this.service.updateEmployee(this.employeeId, employee).subscribe(() => {
        console.log(employee)
        this.refreshService.notifyOther({ option: 'add', value: "" });
        this.isShow = false;
      });
    }

  }
  onChange(location: Location) {
    console.log(this.employee);
    if (this.employee.location !== undefined) {
      this.employee.location = location;
    }

  }
  openDeleteDialog() {
    let dialogRef = this.dialog.open(DeleteComponent, {

    });

    dialogRef.afterClosed().subscribe(data => {

      if (data == 'delete') {
        this.delete(this.employeeId);
        this.isShow = false;
      }
    })
  }


  delete(id) {
    this.service.delete(id)
      .subscribe(id => {
        console.log(id);
        this.service.getAll().
          subscribe(data => {
            this.contacts = data;
            this.refreshService.notifyOther({ option: 'delete', value: data });
          });
      });
      this.deleteHidden = false;
      this.reset();
  }

}





