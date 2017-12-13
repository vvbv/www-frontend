import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaEventosPreinscritosUsuarioComponent } from './lista-eventos-preinscritos-usuario.component';

const routes: Routes = [
    { path: '', component: ListaEventosPreinscritosUsuarioComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListaEventosPreinscritosUsuarioRoutingModule { }
