import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenerarEscarapelaComponent } from './generar-escarapela.component';

const routes: Routes = [
    { path: '', component: GenerarEscarapelaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenerarEscarapelaRoutingModule { }
