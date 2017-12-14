import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaEventosInscritosUsuarioComponent } from './lista-eventos-inscritos-usuario.component';

const routes: Routes = [
    { path: '', component: ListaEventosInscritosUsuarioComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListaEventosInscritosUsuarioRoutingModule { }
