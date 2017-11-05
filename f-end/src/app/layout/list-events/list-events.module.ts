import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListEventsComponent } from './list-events.component';
import { ListEventsRoutingModule } from './list-events-routing.module';
import { PageHeaderModule } from './../../shared';
import { MomentModule } from 'angular2-moment';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
@NgModule({
    imports: [
        CommonModule,
        ListEventsRoutingModule,
        PageHeaderModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        MomentModule
    ],
    declarations: [ListEventsComponent],

})
export class ListEventsModule { }
