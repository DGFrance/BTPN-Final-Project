import { TestBed, inject } from '@angular/core/testing';

import { SubmitPopupComponent } from './submitPopup.component';

describe('a submitPopup component', () => {
	let component: SubmitPopupComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				SubmitPopupComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([SubmitPopupComponent], (SubmitPopupComponent) => {
		component = SubmitPopupComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});