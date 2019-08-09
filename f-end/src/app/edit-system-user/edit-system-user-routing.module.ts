import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditSystemUserComponent } from './edit-system-user.component';

const routes: Routes = [
    { path: '', component: EditSystemUserComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditSystemUserRoutingModule { }