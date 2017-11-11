import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { listUsersComponent } from './list-users-preinscritos-eventos/list-users.component';
import { FormEventoComponent } from './form-evento/form-evento.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
@NgModule({
    imports: [
        CommonModule,
        NgbDropdownModule.forRoot(),
        TranslateModule,
        FormsModule
    ],
    declarations: [
        listUsersComponent,
        FormEventoComponent,
    ],
    exports: [listUsersComponent, FormEventoComponent]
})
export class SharedModule { }
