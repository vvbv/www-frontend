import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    NgbCarouselModule,
    NgbAlertModule
} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from '../app-routing.module';


import { PaginaInicialRoutingModule } from './pagina-inicial-routing.module';
import { PaginaInicialComponent } from './pagina-inicial.component';

import { StatModule } from '../shared';
import { SharedModule } from 'app/shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        AppRoutingModule,
        NgbCarouselModule.forRoot(),
        SharedModule
    ],
    declarations: [
        PaginaInicialComponent
    ]
})
export class PaginaInicialModule { }