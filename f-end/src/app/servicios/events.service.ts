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
    const headers = new Headers();
    headers.append('Authorization', 'JWT ' + localStorage.getItem('tok'));
    return this.http
    .get(this.coneccionInfo.url_eventos , {headers: headers} )
    .toPromise()
    .then(response =>  JSON.parse(response.text().toString()).results as Evento[])
    .catch(response => {
      return response;
    });
  }
  public crearEvento(evento: Evento): Promise<Evento | JSON> {
    const headers = new Headers();
    headers.append('content-type', 'application/json');
    headers.append('Authorization', 'JWT ' + localStorage.getItem('tok'));
    return this.http
    .post(this.coneccionInfo.url_eventos , JSON.stringify(evento) ,  {headers: headers})
    .toPromise()
    .then(response =>    JSON.parse(response.text().toString()) as Evento )
    .catch(response => {
      return  JSON.parse(response.text().toString());
    });
  }

  deleteEvent(event: Evento) {}
  updateEvent(event: Evento) {}
}
