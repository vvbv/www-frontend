import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    NgbCarouselModule,
    NgbAlertModule
} from '@ng-bootstrap/ng-bootstrap';

import { EditarActividadRoutingModule } from './editar-actividad-routing.module';
import { StatModule } from '../../shared';
import { EditarActividadComponent } from './editar-actividad.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        EditarActividadRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        StatModule,
        SharedModule
    ],
    declarations: [
        EditarActividadComponent,
    ]
})
export class EditarActividadModule { }
