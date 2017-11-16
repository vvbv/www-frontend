import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListActivitiesComponent } from './list-activities.component';

const routes: Routes = [
    { path: '', component: ListActivitiesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListActivitiesRoutingModule { }