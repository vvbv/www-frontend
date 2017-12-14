import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    NgbCarouselModule,
    NgbAlertModule
} from '@ng-bootstrap/ng-bootstrap';

import { VerificarEscarapelaRoutingModule } from './verificar-escarapela-routing.module';
import { StatModule } from '../../shared';
import { VerificarEscarapelaComponent } from './verificar-escarapela.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { NgClass } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        VerificarEscarapelaRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        StatModule,
        SharedModule
    ],
    declarations: [
        VerificarEscarapelaComponent,
    ]
})
export class VerificarEscarapelaModule { }
