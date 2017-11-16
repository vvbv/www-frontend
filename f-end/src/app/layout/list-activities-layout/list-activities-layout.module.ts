import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from './../../shared';
import { NgClass } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListActivitiesLayoutRoutingModule } from './list-activities-layout-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { ListActivitiesLayoutComponent } from './list-activities-layout.component';
@NgModule({
    imports: [
        CommonModule,
        PageHeaderModule,
        ListActivitiesLayoutRoutingModule,
        FormsModule,
        SharedModule,
        RouterModule,
        ReactiveFormsModule
    ],
    declarations: [
        ListActivitiesLayoutComponent
    ],
    bootstrap: [ListActivitiesLayoutComponent]
})
export class ListActivitiesLayoutModule {}
