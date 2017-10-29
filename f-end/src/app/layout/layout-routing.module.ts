import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            { path: 'events', loadChildren: './events/events.module#EventsModule'},
            { path: 'list-events', loadChildren: './list-events/list-events.module#ListEventsModule'},
            { path: 'edit-event', loadChildren: './edit-event/edit-event.module#EditEventModule'},
            { path: 'profile', loadChildren: './profile/profile.module#ProfileModule'},
            { path: 'listUsers', loadChildren: './list-users/list-users.module#ListUsersModule'},
            { path: 'newSystemUser', loadChildren: './new-system-user/new-system-user.module#NewSystemUserModule'},
            { path: 'editSystemUser', loadChildren: '../edit-system-user/edit-system-user.module#EditSystemUserModule'},
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
