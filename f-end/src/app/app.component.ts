import { timeout } from 'rxjs/operator/timeout';
import { Component, OnInit } from '@angular/core';
import { Coneccion } from './servicios/coneccion.info';
import { Token } from './servicios/coneccion.info';
import { Evento } from './eventos/evento';
import { JsonFormatter } from 'tslint/lib/formatters';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private coneccion: Coneccion) {}
  title = 'app';
  asdf = 'hola mundo';
  public eventos:  Evento[] ;
  ngOnInit() {
    this.eventos = new Array<Evento>();
    this.coneccion.init( 'http://localhost:8000/api/' , 'auth-jwt', '', '' , 'eventos');
    this.coneccion.obtenerToken('admin', 'Suputamadre-08').then(
   token => this.coneccion.getEventos().then(
     eventos => this.eventos = eventos.results as Evento[]));
  }
}
