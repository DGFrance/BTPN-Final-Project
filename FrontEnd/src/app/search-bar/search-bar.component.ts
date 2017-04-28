import { Component, OnInit } from '@angular/core';
import {MdDialog} from '@angular/material';
import {PopUpComponent} from '../../app/popUp/popUp.component';
import { AppService } from 'app/app.service';
@Component({
	selector: 'search-bar',
	templateUrl: 'search-bar.component.html',
	styleUrls: ['search-bar.component.css']
})

export class SearchBarComponent  {
  employees;
  name;
  id;
  contacts;
  sort = "asc";
  query = "";
  show = false;
  edited = false;
  selectedEmployee = null;
  locationFilter = "";
  genderFilter = ""
constructor(private service:AppService, public dialog: MdDialog) {}
 
 ngOnInit() {
    this.service.getAll().subscribe(data => {
      this.contacts = data;
      console.log(this.contacts);
    });
  }
  openDialog() {
    this.dialog.open(PopUpComponent);
  }

getEmployees(name) {
    this.service.searchName(name)
      .subscribe(contacts => {
        this.contacts = contacts;
        if (this.contacts.length == 0) {
          this.show = true;
        } else {
          this.show = false;
        }
      });
  }

  onChange(event) {
    this.name = event.target.value;
    this.getEmployees(this.name);
  }
}

 


 