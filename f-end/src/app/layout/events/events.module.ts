import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsComponent } from './events.component';
import { EventsRoutingModule } from './events-routing.module';
import { PageHeaderModule } from './../../shared';

import { MdInputModule,  MdSlideToggleModule, MdAutocompleteModule, } from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
@NgModule({
    imports: [
        CommonModule,
        EventsRoutingModule,
        PageHeaderModule,
        MdInputModule,
        MdAutocompleteModule,
        FormsModule,
        ReactiveFormsModule,
        MdSlideToggleModule,
    ],
    declarations: [EventsComponent]
})
export class EventsModule { }
