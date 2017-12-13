import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaEventosInscritosUsuarioComponent } from './lista-eventos-inscritos-usuario.component';
import { ListaEventosInscritosUsuarioRoutingModule } from './lista-eventos-inscritos-usuario-routing.module';
import { PageHeaderModule } from './../../shared';
import { MomentModule } from 'angular2-moment';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        ListaEventosInscritosUsuarioRoutingModule,
        PageHeaderModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        MomentModule
    ],
    declarations: [ListaEventosInscritosUsuarioComponent],

})
export class ListaEventosInscritosUsuarioModule { }
