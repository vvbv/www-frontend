import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarNoticiasLayoutComponent } from './listar-noticias-layout.component';

const routes: Routes = [
    { path: '', component: ListarNoticiasLayoutComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListarNoticiasLayoutRoutingModule {}