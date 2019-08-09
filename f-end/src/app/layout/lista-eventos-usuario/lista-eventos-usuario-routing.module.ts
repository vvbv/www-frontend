import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaEventosUsuarioComponent } from './lista-eventos-usuario.component';

const routes: Routes = [
    { path: '', component: ListaEventosUsuarioComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListaEventosUsuarioRoutingModule { }
