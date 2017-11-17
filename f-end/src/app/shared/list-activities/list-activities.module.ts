import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from './../../shared';
import { NgClass } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListActivitiesComponent } from './list-activities.component';
import { Routes, RouterModule } from '@angular/router';
import { ToastModule, ToastOptions } from 'ng2-toastr/ng2-toastr';

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
export class ListActivitiesModule {}
