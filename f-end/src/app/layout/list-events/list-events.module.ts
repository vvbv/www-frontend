import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListEventsComponent } from './list-events.component';
import { ListEventsRoutingModule } from './list-events-routing.module';
import { PageHeaderModule } from './../../shared';
import { MomentModule } from 'angular2-moment';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
@NgModule({
    imports: [
        CommonModule,
        ListEventsRoutingModule,
        PageHeaderModule,
        FormsModule,
        ReactiveFormsModule,
        MomentModule
    ],
    declarations: [ListEventsComponent]
})
export class ListEventsModule { }
