import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from './../../shared';
import { NgClass } from '@angular/common';

import { listUsersRoutingModule } from './list-users-routing.module';
import { listUsersComponent } from './list-users.component';


@NgModule({
    imports: [
        CommonModule,
        listUsersRoutingModule,
        PageHeaderModule
    ],
    declarations: [
        listUsersComponent
    ]
})
export class ListUsersModule { }