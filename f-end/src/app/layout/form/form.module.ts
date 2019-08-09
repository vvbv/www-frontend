import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [
        CommonModule,
        FormRoutingModule
    ],
    declarations: [FormComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FormModule { }
