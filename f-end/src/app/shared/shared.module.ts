import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { listUsersComponent } from './list-users-preinscritos-eventos/list-users.component';
import { listUsersInscritosComponent } from './list-users-inscritos-eventos/list-users-inscritos.component';
import { FormEventoComponent } from './form-evento/form-evento.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EventoDetalleComponent } from './evento-detalle/evento-detalle.component';
import { TinyComponent } from './tinymc/tinymc.component';
import { Routes, RouterModule } from '@angular/router';
import { FormNoticiaComponent } from './form-noticia/form-noticia.component';
import { PreviewNoticiaComponent } from './preview-noticia/preview-noticia.component';
import { ListaNoticiasComponent } from './lista-noticias/lista-noticias.component';
import { DetalleNoticiaComponent } from './detalle-noticia/detalle-noticia.component';
import { ListActivitiesComponent } from './list-activities/list-activities.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule, ToastOptions } from 'ng2-toastr/ng2-toastr';

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
    ],
    exports: [
        listUsersComponent, 
        FormEventoComponent, 
        FormNoticiaComponent, 
        TinyComponent,
        ListaNoticiasComponent,
        ListActivitiesComponent,
        PreviewNoticiaComponent,
        listUsersInscritosComponent]
})
export class SharedModule { }
