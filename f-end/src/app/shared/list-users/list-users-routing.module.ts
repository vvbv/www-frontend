import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { listUsersComponent } from './list-users.component';

const routes: Routes = [
    { path: '', component: listUsersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class listUsersRoutingModule { }