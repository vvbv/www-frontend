import { TokenService } from './servicios/token.service';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';

import { AuthenticationService } from './servicios/authentication.service';
import { UsuarioService } from './servicios/usuario.service';
import { ConeccionInfo } from './servicios/coneccion.info';
import { EventoService } from './servicios/events.service';
import { PreInscripcionService } from './servicios/preInscripcion.service';
import { InjectorToken } from './servicios/injectorToken.service';
import { CrearActividadModule } from './shared/crear-actividad/crear-actividad.module';
import { ActividadService } from './servicios/actividad.service';
import { InscripcionService } from './servicios/inscripcion.service';
import {ToastModule, ToastOptions} from 'ng2-toastr/ng2-toastr';
import {DpDatePickerModule} from 'ng2-date-picker';
// AoT requires an exported function for factories
export function HttpLoaderFactory(http: Http) {
    // for development
    // return new TranslateHttpLoader(http, '/start-angular/SB-Admin-BS4-Angular-4/master/dist/assets/i18n/', '.json');
    return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}
@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        DpDatePickerModule,
        ReactiveFormsModule,
        NoopAnimationsModule,
        BrowserAnimationsModule,
        CrearActividadModule,
        ToastModule.forRoot(),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [Http]
            }
        })
    ],
    providers: [AuthGuard,
                AuthenticationService,
                UsuarioService,
                EventoService,
                PreInscripcionService,
                ConeccionInfo,
                InscripcionService,
                InjectorToken,
                ToastOptions,
                ActividadService,
                TokenService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
