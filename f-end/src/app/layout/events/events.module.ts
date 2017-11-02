import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsComponent } from './events.component';
import { EventsRoutingModule } from './events-routing.module';
import { PageHeaderModule } from './../../shared';


import {FormsModule, ReactiveFormsModule} from '@angular/forms';
@NgModule({
    imports: [
        CommonModule,
        EventsRoutingModule,
        PageHeaderModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [EventsComponent]
})
export class EventsModule { }
