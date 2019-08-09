import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from './../../shared';
import { NgClass } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { listUsersComponent } from './list-users.component';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        PageHeaderModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule
    ],
    declarations: [
        
    ]
})
export class ListUsersModule {}
