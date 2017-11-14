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
            { path: 'crearActEvento/:id', loadChildren:
            '../shared/crear-actividad/crear-actividad.module#CrearActividadModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            { path: 'events', loadChildren: './events/events.module#EventsModule'},
             { path: 'noticias', loadChildren: './listar-noticias-layout/listar-noticias-layout.module#LisarNoticiasLayoutModule'},
            { path: 'list-events', loadChildren: './list-events/list-events.module#ListEventsModule'},
            { path: 'edit-event/:id', loadChildren: './edit-event/edit-event.module#EditEventModule'},
            { path: 'editarNoticia/:id', loadChildren: './editar-noticia/editar-noticia.module#EditarNoticiaModule'},
            { path: 'profile', loadChildren: './profile/profile.module#ProfileModule'},
            { path: 'listUsers', loadChildren: './list-users-layout/list-users-layout.module#ListUsersLayoutModule'},
            { path: 'newSystemUser', loadChildren: './new-system-user/new-system-user.module#NewSystemUserModule'},
            { path: 'editSystemUser', loadChildren: '../edit-system-user/edit-system-user.module#EditSystemUserModule'},
            { path: 'calendar', loadChildren: './calendar/calendar.module#CalendarEventsModule'},
            { path: 'crearNoticia', loadChildren: './crear-noticia/crear-noticia.module#CrearNoticiaModule'},
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
