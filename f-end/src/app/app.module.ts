import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { EventosComponent } from './eventos/eventos.component';
import { Coneccion, Token } from './servicios/coneccion.info';
@NgModule({
  declarations: [
    AppComponent,
    EventosComponent,
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [Coneccion],
  bootstrap: [AppComponent]
})
export class AppModule { }
