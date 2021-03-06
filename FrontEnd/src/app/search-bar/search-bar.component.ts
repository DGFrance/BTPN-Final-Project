import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { PopUpComponent } from '../../app/popUp/popUp.component';
import { AppService } from 'app/app.service';
import { RefreshService } from 'app/refreshapp.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'search-bar',
  templateUrl: 'search-bar.component.html',
  styleUrls: ['search-bar.component.css']
})

export class SearchBarComponent {
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
  private subscription: Subscription;
  constructor(private service: AppService, public dialog: MdDialog, private RefreshService: RefreshService) { }

  ngOnInit() {
    this.service.getAll().subscribe(data => {
      this.contacts = data;
    });
    this.subscription = this.RefreshService.notifyObservable$.subscribe((res) => {
      if (res.hasOwnProperty('option') && res.option === 'newVal') {
        this.contacts = res.value;
      }
      if (res.hasOwnProperty('option') && res.option === 'refresh') {
        this.contacts = res.value;
      }
    });
  }
  filterEmployee() {
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
        this.RefreshService.notifyOther({ option: 'refresh', value: contacts });
      });
  }

  onChange(event) {
    this.name = event.target.value;
    this.getEmployees(this.name);
  }

  sorting() {
    if (this.sort == "asc") {
      this.sort = "desc";
    }
    else {
      this.sort = "asc";
    }
    this.service.sortingEmployee(this.sort)
      .subscribe(result => {
        this.contacts = result;
        this.RefreshService.notifyOther({ option: 'refresh', value: result });
      });

  }

}





