import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    NgbCarouselModule,
    NgbAlertModule
} from '@ng-bootstrap/ng-bootstrap';


import { PaginaInicialRoutingModule } from './pagina-inicial-routing.module';
import { PaginaInicialComponent } from './pagina-inicial.component';

import { StatModule } from '../shared';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
    ],
    declarations: [
        PaginaInicialComponent
    ]
})
export class PaginaInicialModule { }