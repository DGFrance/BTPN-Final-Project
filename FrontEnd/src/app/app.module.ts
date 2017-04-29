import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdIconModule, MdInputModule, MdChipsModule, MdTabsModule, MdSelectModule, MdDialogModule, MdCardModule, MdTooltipModule, MdMenuModule, MdSidenavModule, MdCheckboxModule, MdOptionModule} from '@angular/material';
import { Md2Module }  from 'md2';
import {ListEmployeeComponent} from './list-employee/list-employee.component';
import {SearchBarComponent} from './search-bar/search-bar.component';
import {NavigatorBarComponent} from './navigator-bar/navigator-bar.component';
import {BtnSvgComponent} from './btn-svg/btn-svg.component';
import {EmployeeDataComponent} from './employeeData/employeeData.component';
import {AddFormComponent} from './addForm/addForm.component';
import {PopUpComponent} from './popUp/popUp.component';
import {AppService} from './app.service';
import {RefreshService} from './refreshapp.service';
import {ReactiveFormsModule} from '@angular/forms';
import {DatePipe} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeeComponent,
    SearchBarComponent,
    NavigatorBarComponent,
    BtnSvgComponent,
    EmployeeDataComponent,
    AddFormComponent,
    PopUpComponent,
  
    
  ],
  
  entryComponents: [AddFormComponent , PopUpComponent, ],
  
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdIconModule, 
    MdInputModule,
    MdChipsModule, 
    MdTabsModule,
    MdSelectModule,
    MdDialogModule,
    MdCardModule,
    MdTooltipModule,
    MdMenuModule,
    MdSidenavModule,
    MdCheckboxModule,
    MdOptionModule,
    Md2Module,
    ReactiveFormsModule,
    
  
  ],
  providers: [AppService, RefreshService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
