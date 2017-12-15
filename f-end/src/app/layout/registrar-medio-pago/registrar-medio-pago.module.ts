import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrarMedioPagoComponent } from './registrar-medio-pago.component';
import { RegistrarMedioPagoRoutingModule } from './registrar-medio-pago-routing.module';
import { PageHeaderModule } from './../../shared';
import { MomentModule } from 'angular2-moment';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ToastModule } from 'ng2-toastr/src/toast.module';

@NgModule({
    imports: [
        CommonModule,
        RegistrarMedioPagoRoutingModule,
        PageHeaderModule,
        FormsModule,
        ReactiveFormsModule,
        ToastModule.forRoot(),
        SharedModule,
        MomentModule
    ],
    declarations: [RegistrarMedioPagoComponent],

})
export class RegistrarMedioPagoModule { }
