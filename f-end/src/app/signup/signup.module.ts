import { ReactiveErrors } from '@angular/forms/src/directives/reactive_errors';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { UsuarioService } from '../servicios/usuario.service';
import { FormControl, FormsModule, ReactiveFormsModule  } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SignupRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [SignupComponent],
  providers: [UsuarioService],
})
export class SignupModule { }
