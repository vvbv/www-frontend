import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrarMedioPagoComponent } from './registrar-medio-pago.component';

const routes: Routes = [
    { path: '', component: RegistrarMedioPagoComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RegistrarMedioPagoRoutingModule { }
