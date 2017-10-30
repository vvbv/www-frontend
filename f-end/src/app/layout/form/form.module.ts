import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { PageHeaderModule } from './../../shared';
import { CrearActividadComponent } from '../../shared/crear-actividad/crear-actividad.component';
@NgModule({
    imports: [
        CommonModule,
        FormRoutingModule
    ],
    declarations: [FormComponent, CrearActividadComponent]
})
export class FormModule { }
