import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent, SidebarComponent } from '../shared';
import { EditEventComponent } from './edit-event/edit-event.component';
import { ListarNoticiasLayoutComponent } from './listar-noticias-layout/listar-noticias-layout.component';

@NgModule({
    imports: [
        CommonModule,
        NgbDropdownModule.forRoot(),
        LayoutRoutingModule,
        TranslateModule
    ],
    declarations: [
        LayoutComponent,
        HeaderComponent,
        SidebarComponent,
        ListarNoticiasLayoutComponent,
    ]
})
export class LayoutModule { }
