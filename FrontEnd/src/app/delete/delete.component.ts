import { Component, OnInit } from '@angular/core';
import { RefreshService } from 'app/refreshapp.service';
import { AppService } from 'app/app.service';
import { MdDialog, MdDialogRef } from '@angular/material';
import { Subscription } from 'rxjs/Subscription'

@Component({
	selector: 'delete',
	templateUrl: 'delete.component.html',
	styleUrls: ['delete.component.css']
})

export class DeleteComponent implements OnInit {

	private subscription: Subscription
	contactId;

	constructor(public dialogRef: MdDialogRef<DeleteComponent>, public dialog: MdDialog,
		private service: AppService, private refreshService: RefreshService) { }

	ngOnInit() { }
}