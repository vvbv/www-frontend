import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearActividadComponent } from './crear-actividad.component';

const routes: Routes = [
    { path: '', component: CrearActividadComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrearActividadRoutingModule { }
