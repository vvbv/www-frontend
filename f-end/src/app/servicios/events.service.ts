import { EventoEstructura } from '../modelos/eventoEstructura.class';
import { ConeccionInfo } from './coneccion.info';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Evento } from '../modelos/evento.class';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class EventoService {
  constructor( private http: Http, private authenticationService: AuthenticationService, private coneccionInfo: ConeccionInfo ) { }
  public getEventos(): Observable<Evento[]> {
    return this.http
    .get(this.coneccionInfo.url_eventos , {headers: this.coneccionInfo.headers} )
    .map (response => {
    
      return JSON.parse(response.text()) as Evento[]
    });
  }
  public getEvento(id: number): Observable<Evento>  {
    return this.http
    .get(this.coneccionInfo.url_eventos + id.toString(), {headers: this.coneccionInfo.headers})
    .map( response =>   JSON.parse(response.text().toString()) as Evento) ;

  }
  public crearEvento(evento: Evento): Promise<Evento | JSON> {
    return this.http
    .post(this.coneccionInfo.url_eventos , JSON.stringify(evento) ,  {headers: this.coneccionInfo.headers})
    .toPromise()
    .then(response =>   {
      return (JSON.parse(response.text().toString()) as Evento)  ; }  )
    .catch(response => {
      return  JSON.parse(response.text().toString());
    });
  }
  public getOpciones(): Observable<JSON> {
    return this.http
    .options(this.coneccionInfo.url_eventos ,  {headers: this.coneccionInfo.headers})
    .map(response => JSON.parse(response.text().toString())  )
;
  }

  deleteEvent(event: Evento) {}
  updateEvent(event: Evento): Promise<Evento | JSON> {
     return this.http
    .put(this.coneccionInfo.url_eventos + event.id +  '/', JSON.stringify(event) , {headers: this.coneccionInfo.headers})
    .toPromise()
    .then(
      response => {
        console.log(response.text());
        return (JSON.parse(response.text().toString()) as Evento);
      }
    )
    .catch(
      response => {
        console.log(response.text());
        return (JSON.parse(response.text().toString()));
      }
    );
  }
}
