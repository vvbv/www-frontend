import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { listUsersComponent } from './list-users-preinscritos-eventos/list-users.component';

@NgModule({
    imports: [
        CommonModule,
        NgbDropdownModule.forRoot(),
        TranslateModule
    ],
    declarations: [
        listUsersComponent,
    ],
    exports: [listUsersComponent]
})
export class SharedModule { }
