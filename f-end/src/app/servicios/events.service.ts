import { ConeccionInfo } from './coneccion.info';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Event } from '../eventos/evento';
@Injectable()
export class EventoService {
  constructor( private http: Http, private authenticationService: AuthenticationService, private coneccionInfo: ConeccionInfo ) { }
  public getEventos(): Promise<Event[]> {
    const headers = new Headers();
    headers.append('Authorization', 'JWT ' + localStorage.getItem('tok'));
    return this.http
    .get(this.coneccionInfo.url_eventos , {headers: headers} )
    .toPromise()
    .then(response =>  JSON.parse(response.text().toString()).results as Event[])
    .catch(response => {
      return response;
    });
  }
  public crearEvento(evento: Event): Promise<Event> {
    const headers = new Headers();
    headers.append('content-type', 'application/json');
    headers.append('Authorization', 'JWT ' + localStorage.getItem('tok'));
    return this.http
    .post(this.coneccionInfo.url_eventos , JSON.stringify(evento) ,  {headers: headers})
    .toPromise()
    .then(response => {
      return JSON.parse(response.text().toString()).results as Event;
     } )
    .catch(response => {
      return response;
    });
  }

  deleteEvent(event: Event) {}
  updateEvent(event: Event) {}
}
