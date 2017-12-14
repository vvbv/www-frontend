import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    NgbCarouselModule,
    NgbAlertModule
} from '@ng-bootstrap/ng-bootstrap';

import { GenerarEscarapelaRoutingModule } from './generar-escarapela-routing.module';
import { StatModule } from '../../shared';
import { GenerarEscarapelaComponent } from './generar-escarapela.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { NgClass } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        GenerarEscarapelaRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        StatModule,
        SharedModule
    ],
    declarations: [
        GenerarEscarapelaComponent,
    ]
})
export class GenerarEscarapelaModule { }
