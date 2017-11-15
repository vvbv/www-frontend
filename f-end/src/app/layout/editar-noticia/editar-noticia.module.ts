import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    NgbCarouselModule,
    NgbAlertModule
} from '@ng-bootstrap/ng-bootstrap';

import { EditarNoticiaRoutingModule } from './editar-noticia-routing.module';
import { StatModule } from '../../shared';
import { EditarNoticiaComponent } from './editar-noticia.component';
import { SharedModule } from '../../shared/shared.module';
@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        EditarNoticiaRoutingModule,
        StatModule,
        SharedModule,
    ],
    declarations: [
        EditarNoticiaComponent,
    ]
})
export class EditarNoticiaModule { }
