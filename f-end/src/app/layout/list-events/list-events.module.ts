import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListEventsComponent } from './list-events.component';
import { ListEventsRoutingModule } from './list-events-routing.module';
import { PageHeaderModule } from './../../shared';
import { MomentModule } from 'angular2-moment';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { listUsersComponent } from '../../shared/list-users-preinscritos-eventos/list-users.component';
@NgModule({
    imports: [
        CommonModule,
        ListEventsRoutingModule,
        PageHeaderModule,
        FormsModule,
        ReactiveFormsModule,
        MomentModule
    ],
    declarations: [ListEventsComponent, listUsersComponent],

})
export class ListEventsModule { }
