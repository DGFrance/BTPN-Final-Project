import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'popUp',
	templateUrl: 'popUp.component.html',
	styleUrls: ['popUp.component.css']
})

export class PopUpComponent implements OnInit {
 selectedValue: string;
 

  foods = [
    {value: 'Bali', viewValue: 'Bali'},
    {value: 'Bandung', viewValue: 'Bandung'},
    {value: 'Jakarta', viewValue: 'Jakarta'},
	{value: 'Yogyakarta', viewValue: 'Yogyakarta'}
  ];

genders = [
    {value: 'Man', viewValue: 'Man'},
    {value: 'Woman', viewValue: 'Woman'},
   
  ];
	ngOnInit() { }
}