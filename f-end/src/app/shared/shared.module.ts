import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { listUsersComponent } from './list-users-preinscritos-eventos/list-users.component';
import { FormEventoComponent } from './form-evento/form-evento.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EventoDetalleComponent } from './evento-detalle/evento-detalle.component';
import { TinyComponent } from './tinymc/tinymc.component';
import { Routes, RouterModule } from '@angular/router';
import { FormNoticiaComponent } from './form-noticia/form-noticia.component';
import { PreviewNoticiaComponent } from './preview-noticia/preview-noticia.component';
import { ListaNoticiasComponent } from './lista-noticias/lista-noticias.component';
@NgModule({
    imports: [
        CommonModule,
        NgbDropdownModule.forRoot(),
        TranslateModule,
        RouterModule,
        FormsModule
    ],
    declarations: [
        listUsersComponent,
        FormEventoComponent,
        EventoDetalleComponent,
        TinyComponent,
        FormNoticiaComponent,
        PreviewNoticiaComponent,
        ListaNoticiasComponent,
    ],
    exports: [listUsersComponent, FormEventoComponent, FormNoticiaComponent, TinyComponent, ListaNoticiasComponent, PreviewNoticiaComponent]
})
export class SharedModule { }
