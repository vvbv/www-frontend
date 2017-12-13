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

@NgModule({
    imports: [
        CommonModule,
        NgbDropdownModule.forRoot(),
        TranslateModule,
        RouterModule,
        FormsModule,
        ToastModule.forRoot(),
    ],
    declarations: [
        listUsersComponent,
        FormEventoComponent,
        listUsersInscritosComponent,
        EventoDetalleComponent,
        TinyComponent,
        FormNoticiaComponent,
        PreviewNoticiaComponent,
        ListaNoticiasComponent,
        ListActivitiesComponent,
        DetalleNoticiaComponent,
        PreviewEventoComponent,
        ListaEventosComponent,
        NoticiaPreviewComponent,
        UserPreviewComponent,
        UsersPreviewComponent,
    ],
    exports: [
        listUsersComponent, 
        FormEventoComponent, 
        FormNoticiaComponent, 
        TinyComponent,
        ListaNoticiasComponent,
        NoticiaPreviewComponent,
        ListActivitiesComponent,
        ListaEventosComponent,
        PreviewEventoComponent,
        PreviewNoticiaComponent,
        listUsersInscritosComponent]
})
export class SharedModule { }
