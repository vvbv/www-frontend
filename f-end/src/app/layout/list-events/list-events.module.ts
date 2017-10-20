import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListEventsComponent } from './list-events.component';
import { ListEventsRoutingModule } from './list-events-routing.module';
import { PageHeaderModule } from './../../shared';

import {
    MdInputModule,
    MdSlideToggleModule,
    MdAutocompleteModule,
    MatButtonModule,
    MatDatepickerModule,
    MdNativeDateModule
 } from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
@NgModule({
    imports: [
        CommonModule,
        ListEventsRoutingModule,
        PageHeaderModule,
        MdInputModule,
        MdAutocompleteModule,
        FormsModule,
        ReactiveFormsModule,
        MdSlideToggleModule,
        MatButtonModule,
        MatDatepickerModule,
        MdNativeDateModule
    ],
    declarations: [ListEventsComponent]
})
export class EventsModule { }
