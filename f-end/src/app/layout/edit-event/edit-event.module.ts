import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditEventComponent } from './edit-event.component';
import { EditEventsRoutingModule } from './edit-event-routing.module';
import { PageHeaderModule } from './../../shared';
import { DateTimePickerModule } from 'ng-pick-datetime';
import {ToastModule, ToastOptions} from 'ng2-toastr/ng2-toastr';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
@NgModule({
    imports: [
        CommonModule,
        EditEventsRoutingModule,
        PageHeaderModule,
        FormsModule,
        ReactiveFormsModule,
        ToastModule.forRoot(),
        DateTimePickerModule
    ],
    declarations: [EditEventComponent],
    providers: [ToastOptions],
})
export class EditEventModule { }
