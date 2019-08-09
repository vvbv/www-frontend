import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditarActividadComponent } from './editar-actividad.component';

const routes: Routes = [
    { path: '', component: EditarActividadComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditarActividadRoutingModule { }
