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
    this.coneccion.init( 'http://localhost:8000/api/' , 'auth-jwt', '', '' ,
                          'eventos', 'eventos/');
    this.coneccion.obtenerToken('administrator', 'administrator').then(
   token =>   { this.coneccion.getEventos().then(
     eventos => { this.eventos = eventos;
      this.cambiarPrimerUsuario(); } );
      } );
  }
  cambiarPrimerUsuario() {
    this.eventos[1].nombre = 'Evento 3';
    this.eventos[1].descripcion = 'Su madre';
    var ev: Evento;
    ev  = this.eventos[1];
    console.log(JSON.stringify(ev ));
    this.coneccion.crearEvento(this.eventos[1]);
  }

}
