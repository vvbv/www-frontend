import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaEventosPreinscritosUsuarioComponent } from './lista-eventos-preinscritos-usuario.component';
import { ListaEventosPreinscritosUsuarioRoutingModule } from './lista-eventos-preinscritos-usuario-routing.module';
import { PageHeaderModule } from './../../shared';
import { MomentModule } from 'angular2-moment';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        ListaEventosPreinscritosUsuarioRoutingModule,
        PageHeaderModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        MomentModule
    ],
    declarations: [ListaEventosPreinscritosUsuarioComponent],

})
export class ListaEventosPreinscritosUsuarioModule { }
