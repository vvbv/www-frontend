import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaEventosUsuarioComponent } from './lista-eventos-usuario.component';
import { ListaEventosUsuarioRoutingModule } from './lista-eventos-usuario-routing.module';
import { PageHeaderModule } from './../../shared';
import { MomentModule } from 'angular2-moment';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        ListaEventosUsuarioRoutingModule,
        PageHeaderModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        MomentModule
    ],
    declarations: [ListaEventosUsuarioComponent],

})
export class ListaEventosUsuarioModule { }
