import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from './../../shared';
import { NgClass } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListUsersModule } from '../../shared/list-users/list-users.module';
import { listUsersLayoutComponent } from './list-users-layout.component';

@NgModule({
    imports: [
        CommonModule,
        ListUsersModule,
        PageHeaderModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        listUsersLayoutComponent
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    bootstrap: [listUsersLayoutComponent]
})
export class ListUsersLayoutModule { }