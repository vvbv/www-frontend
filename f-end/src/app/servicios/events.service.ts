import { ConeccionInfo } from './coneccion.info';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Evento } from '../modelos/evento.class';
@Injectable()
export class EventoService {
  constructor( private http: Http, private authenticationService: AuthenticationService, private coneccionInfo: ConeccionInfo ) { }
  public getEventos(): Promise<Evento[]> {
    return this.http
    .get(this.coneccionInfo.url_eventos , {headers: this.coneccionInfo.headers} )
    .toPromise()
    .then(response =>  JSON.parse(response.text().toString()).results as Evento[])
    .catch(response => {
      return response;
    });
  }
  public crearEvento(evento: Evento): Promise<Evento | JSON> {
    return this.http
    .post(this.coneccionInfo.url_eventos , JSON.stringify(evento) ,  {headers: this.coneccionInfo.headers})
    .toPromise()
    .then(response =>    JSON.parse(response.text().toString()) as Evento )
    .catch(response => {
      return  JSON.parse(response.text().toString());
    });
  }
  public getOpciones() {
    return this.http
    .options(this.coneccionInfo.url_eventos ,  {headers: this.coneccionInfo.headers})
    .toPromise()
    .then(response =>    JSON.parse(response.text().toString()) as Evento )
    .catch(response => {
      return  JSON.parse(response.text().toString());
    });
  }

  deleteEvent(event: Evento) {}
  updateEvent(event: Evento) {}
}
