import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerificarEscarapelaComponent } from './verificar-escarapela.component';

const routes: Routes = [
    { path: '', component: VerificarEscarapelaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerificarEscarapelaRoutingModule { }
