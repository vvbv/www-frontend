import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';


import { PageHeaderModule } from './../../shared';


import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CrearActividadComponent } from './crear-actividad.component';
import { ActividadRoutingModule } from './crear-actividad-routing.module';
@NgModule({
    imports: [
        CommonModule,
        NgbDropdownModule.forRoot(),
        TranslateModule,
        CommonModule,
        PageHeaderModule,
        FormsModule,
        ReactiveFormsModule,
        ActividadRoutingModule,
    ],
    declarations: [
        CrearActividadComponent
    ],
    exports: [
        CrearActividadComponent
    ]
})
export class CrearActividadModule { }
