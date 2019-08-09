import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditarNoticiaComponent } from './editar-noticia.component';

const routes: Routes = [
    { path: '', component: EditarNoticiaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditarNoticiaRoutingModule { }
