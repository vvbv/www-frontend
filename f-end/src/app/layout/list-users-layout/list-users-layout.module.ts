import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from './../../shared';
import { NgClass } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { listUsersLayoutComponent } from './list-users-layout.component';
import { listUsersLayoutRoutingModule } from './list-users-routing.module';
import { listUsersComponent } from '../../shared/list-users/list-users.component';
@NgModule({
    imports: [
        CommonModule,
        PageHeaderModule,
        listUsersLayoutRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        listUsersLayoutComponent,
        listUsersComponent
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    bootstrap: [listUsersLayoutComponent]
})
export class ListUsersLayoutModule {}
