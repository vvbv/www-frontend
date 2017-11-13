import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearNoticiaComponent } from './crear-noticia.component';

const routes: Routes = [
    { path: '', component: CrearNoticiaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrearNoticiaRoutingModule { }
