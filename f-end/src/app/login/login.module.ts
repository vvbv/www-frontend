import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {ToastModule, ToastOptions} from 'ng2-toastr/ng2-toastr';

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        FormsModule ,
        ToastModule.forRoot(),
    ],
    declarations: [LoginComponent],
    providers: [  ToastOptions ]
})
export class LoginModule {
}
