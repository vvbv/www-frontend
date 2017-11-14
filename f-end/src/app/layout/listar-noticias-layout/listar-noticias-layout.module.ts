import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from './../../shared';
import { NgClass } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListarNoticiasLayoutRoutingModule } from './listar-noticias-layout-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ListarNoticiasLayoutComponent } from './listar-noticias-layout.component';
@NgModule({
    imports: [
        CommonModule,
        PageHeaderModule,
        ListarNoticiasLayoutRoutingModule,
        FormsModule,
        SharedModule,
        ReactiveFormsModule
    ],
    declarations: [
        ListarNoticiasLayoutComponent
    ],
    bootstrap: [ListarNoticiasLayoutComponent]
})
export class LisarNoticiasLayoutModule {}
