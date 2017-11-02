import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from './../../shared';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

import { NewSystemUserRoutingModule } from './new-system-user-routing.module';
import { NewSystemUserComponent } from './new-system-user.component';


@NgModule({
    imports: [
        CommonModule,
        NewSystemUserRoutingModule,
        PageHeaderModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        NewSystemUserComponent
    ]
})
export class NewSystemUserModule { }