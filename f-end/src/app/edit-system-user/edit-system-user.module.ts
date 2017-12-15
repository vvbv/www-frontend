import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from './../shared';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

import { EditSystemUserRoutingModule } from './edit-system-user-routing.module';
import { EditSystemUserComponent } from './edit-system-user.component';


@NgModule({
    imports: [
        CommonModule,
        EditSystemUserRoutingModule,
        PageHeaderModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        EditSystemUserComponent
    ]
})
export class EditSystemUserModule { }