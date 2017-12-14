import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { listUsersComponent } from './list-users-preinscritos-eventos/list-users.component';
import { listUsersInscritosComponent } from './list-users-inscritos-eventos/list-users-inscritos.component';
import { FormEventoComponent } from './form-evento/form-evento.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventoDetalleComponent } from './evento-detalle/evento-detalle.component';
import { TinyComponent } from './tinymc/tinymc.component';
import { Routes, RouterModule } from '@angular/router';
import { FormNoticiaComponent } from './form-noticia/form-noticia.component';
import { PreviewNoticiaComponent } from './preview-noticia/preview-noticia.component';
import { ListaNoticiasComponent } from './lista-noticias/lista-noticias.component';
import { DetalleNoticiaComponent } from './detalle-noticia/detalle-noticia.component';
import { ListActivitiesComponent } from './list-activities/list-activities.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule, ToastOptions } from 'ng2-toastr/ng2-toastr';
import { PreviewEventoComponent } from './preview-evento/preview-evento.component';
import { ListaEventosComponent } from './lista-eventos/lista-eventos.component';
import { NoticiaPreviewComponent } from './noticia-preview/noticia-preview.component';
import { UserPreviewComponent } from './user-preview/user-preview.component';
import { UsersPreviewComponent } from './users-preview/users-preview.component';
import { ListaEventosPreinscritosComponent } from './lista-eventos-preinscritos/lista-eventos-preinscritos.component';
import { PreviewEventoPreinscripcionComponent } from './preview-evento-preinscrito/preview-evento.component';
import { ListaEventosInscritosComponent } from './lista-eventos-inscritos/lista-eventos-inscritos.component';
import { PreviewEventoInscripcionComponent } from './preview-evento-inscrito/preview-evento.component';
@NgModule({
    imports: [
        CommonModule,
        NgbDropdownModule.forRoot(),
        ToastModule.forRoot(),
        TranslateModule,
        RouterModule,
        FormsModule,
    ],
    declarations: [
        PreviewEventoComponent,
        listUsersComponent,
        FormEventoComponent,
        listUsersInscritosComponent,
        EventoDetalleComponent,
        ListaEventosInscritosComponent,
        PreviewEventoPreinscripcionComponent,
        TinyComponent,
        FormNoticiaComponent,
        PreviewNoticiaComponent,
        ListaNoticiasComponent,
        ListActivitiesComponent,
        DetalleNoticiaComponent,
        ListaEventosComponent,
        PreviewEventoInscripcionComponent,
        NoticiaPreviewComponent,
        UserPreviewComponent,
        ListaEventosPreinscritosComponent,
        UsersPreviewComponent,
    ],
    exports: [
        PreviewEventoComponent,
        listUsersComponent, 
        FormEventoComponent, 
        FormNoticiaComponent, 
        TinyComponent,
        ListaNoticiasComponent,
        ListaEventosPreinscritosComponent,
        ListaEventosInscritosComponent,
        NoticiaPreviewComponent,
        ListActivitiesComponent,
        ListaEventosComponent,
        PreviewEventoPreinscripcionComponent,
        PreviewEventoInscripcionComponent,
        PreviewNoticiaComponent,
        listUsersInscritosComponent
    ],
     providers: [ToastOptions],
    
})
export class SharedModule { }
