import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { listUsersLayoutComponent } from './list-users-layout.component';

const routes: Routes = [
    { path: '', component: listUsersLayoutComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class listUsersLayoutRoutingModule {}