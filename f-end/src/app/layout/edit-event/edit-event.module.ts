import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditEventComponent } from './edit-event.component';
import { EditEventsRoutingModule } from './edit-event-routing.module';
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
        EditEventsRoutingModule,
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
    declarations: [EditEventComponent]
})
export class EditEventModule { }
