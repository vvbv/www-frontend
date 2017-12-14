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
            { path: 'eventos-por-ver', loadChildren: './lista-eventos-usuario/lista-eventos-usuario.module#ListaEventosUsuarioModule'},
            { path: 'eventos-preinscritos', loadChildren: './lista-eventos-preinscritos-usuario/lista-eventos-preinscritos-usuario.module#ListaEventosPreinscritosUsuarioModule'},
            { path: 'eventos-inscritos', loadChildren: './lista-eventos-inscritos-usuario/lista-eventos-inscritos-usuario.module#ListaEventosInscritosUsuarioModule'},
            { path: 'edit-event/:id', loadChildren: './edit-event/edit-event.module#EditEventModule'},
            { path: 'editarNoticia/:id', loadChildren: './editar-noticia/editar-noticia.module#EditarNoticiaModule'},
            { path: 'profile', loadChildren: './profile/profile.module#ProfileModule'},
            { path: 'listUsers', loadChildren: './list-users-layout/list-users-layout.module#ListUsersLayoutModule'},
            { path: 'newSystemUser', loadChildren: './new-system-user/new-system-user.module#NewSystemUserModule'},
            { path: 'editSystemUser', loadChildren: '../edit-system-user/edit-system-user.module#EditSystemUserModule'},
            { path: 'calendar', loadChildren: './calendar/calendar.module#CalendarEventsModule'},
            { path: 'crearNoticia', loadChildren: './crear-noticia/crear-noticia.module#CrearNoticiaModule'},
            { path: 'listActivities', loadChildren: './list-activities-layout/list-activities-layout.module#ListActivitiesLayoutModule'},
            { path: 'newActivity', loadChildren: './crear-actividad/crear-actividad.module#CrearActividadModule'},
            { path: 'editActivity', loadChildren: './editar-actividad/editar-actividad.module#EditarActividadModule'},
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
