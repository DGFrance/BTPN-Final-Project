import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'addForm',
	templateUrl: 'addForm.component.html',
	styleUrls: ['./addForm.component.css']
})

export class AddFormComponent implements OnInit {
 statuss = [
    {value: 'Married-0', viewValue: 'Married'},
    {value: 'Single-1', viewValue: 'Single'},
  ];

   genders = [
    {value: 'Male-0', viewValue: 'Male'},
    {value: 'Female-1', viewValue: 'Female'},
  ];

   maritals = [
    {value: 'Divorced-0', viewValue: 'Divorced'},
    {value: 'Widowed-1', viewValue: 'Widowed'},
    {value: 'Married-2', viewValue: 'Married'},
    {value: 'Single-3', viewValue: 'Single'},
  ];

  divisions = [
    {value: 'SE-0', viewValue: 'SE'},
    {value: 'SQ-1', viewValue: 'SQ'},
	{value: 'TS-2', viewValue: 'TS'},
	{value: 'AC-3', viewValue: 'AC'},
  ];

  grades = [
    {value: 'JP-0', viewValue: 'JP'},
    {value: 'PG-1', viewValue: 'PG'},
	{value: 'AP-2', viewValue: 'AP'},
	{value: 'AN-3', viewValue: 'AN'},
  ];
	ngOnInit() { }
}