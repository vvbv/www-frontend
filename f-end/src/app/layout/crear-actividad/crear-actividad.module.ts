import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    NgbCarouselModule,
    NgbAlertModule
} from '@ng-bootstrap/ng-bootstrap';

import { CrearActividadRoutingModule } from './crear-actividad-routing.module';
import { StatModule } from '../../shared';
import { CrearActividadComponent } from './crear-actividad.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        CrearActividadRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        StatModule,
        SharedModule
    ],
    declarations: [
        CrearActividadComponent,
    ]
})
export class CrearActividadModule { }
