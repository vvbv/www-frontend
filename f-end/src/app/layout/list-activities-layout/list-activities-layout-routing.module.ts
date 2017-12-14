import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListActivitiesLayoutComponent } from './list-activities-layout.component';

const routes: Routes = [
    { path: '', component: ListActivitiesLayoutComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListActivitiesLayoutRoutingModule {}