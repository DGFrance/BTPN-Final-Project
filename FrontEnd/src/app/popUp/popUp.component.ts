import { Component, OnInit } from '@angular/core';
import { AppService } from 'app/app.service'
import { MdDialogRef } from '@angular/material';
import { RefreshService } from 'app/refreshapp.service';

@Component({
	selector: 'popUp',
	templateUrl: 'popUp.component.html',
	styleUrls: ['popUp.component.css']
})

export class PopUpComponent implements OnInit {
 selectedValue: string;
  selectedGenderValue;
  selectedLocationValue; 
  show;
  contacts;
  data;

constructor(public dialogRef: MdDialogRef<PopUpComponent>,private service: AppService,  private refreshService:RefreshService , ) { }

  locations = [
    {value: 'Bali', viewValue: 'Bali'},
    {value: 'Bandung', viewValue: 'Bandung'},
    {value: 'Jakarta', viewValue: 'Jakarta'},
	{value: 'Yogyakarta', viewValue: 'Yogyakarta'}
  ];

genders = [
    {value: 'Male', viewValue: 'Male'},
    {value: 'Female', viewValue: 'Female'},
   
  ];
	ngOnInit() { }

reset(){
    this.selectedGenderValue = undefined ;
    this.selectedLocationValue = undefined;
}
doFilter(){
  
        if(this.selectedGenderValue===undefined && this.selectedLocationValue===undefined){
            this.dialogRef.close;
             
            
        }
        else if(this.selectedGenderValue!==undefined && this.selectedLocationValue===undefined){
            this.dialogRef.close;
            this.service.filterByGender(this.selectedGenderValue).subscribe(data=>{
                this.refreshService.notifyOther({ option: 'refresh', value: data });
                 if (this.data.length == 0) {
                this.show = true;
              } else {
                this.show = false;
              }
            });
            
        }
        else if(this.selectedGenderValue===undefined && this.selectedLocationValue!==undefined){
            this.dialogRef.close;
            this.service.filterByLocation(this.selectedLocationValue).subscribe(data=>{
                this.refreshService.notifyOther({ option: 'refresh', value: data });
                 if (this.contacts.length == 0) {
                this.show = true;
              } else {
                this.show = false;
              }
            });
           
        }
        else{
             this.dialogRef.close;
            this.service.filterByLocationAndGender(this.selectedLocationValue,this.selectedGenderValue).subscribe(data=>{
                this.refreshService.notifyOther({ option: 'refresh', value: data });
                 if (this.contacts.length == 0) {
                this.show = true;
              } else {
                this.show = false;
              }
            });
            
        }
        
}
}