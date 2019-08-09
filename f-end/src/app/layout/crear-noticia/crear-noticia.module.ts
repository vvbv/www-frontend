import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    NgbCarouselModule,
    NgbAlertModule
} from '@ng-bootstrap/ng-bootstrap';

import { CrearNoticiaRoutingModule } from './crear-noticia-routing.module';
import { StatModule } from '../../shared';
import { CrearNoticiaComponent } from './crear-noticia.component';
import { SharedModule } from '../../shared/shared.module';
@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        CrearNoticiaRoutingModule,
        StatModule,
        SharedModule,
    ],
    declarations: [
        CrearNoticiaComponent,
    ]
})
export class CrearNoticiaModule { }
