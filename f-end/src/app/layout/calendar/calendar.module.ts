import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from '../../shared';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './calendar.component';
import { CalendarModule } from 'angular-calendar';


import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
    imports: [
        CommonModule,
        CalendarRoutingModule,
        PageHeaderModule,
        NgbModalModule.forRoot(),
        ReactiveFormsModule,
        FormsModule,
        CalendarModule.forRoot()
    ],
    declarations: [
        CalendarComponent
    ]
})
export class CalendarEventsModule { }
