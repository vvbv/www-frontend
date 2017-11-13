import { ImagenesService } from './imagenes.service';
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
  constructor( private http: Http,
    imagenesService: ImagenesService, private authenticationService: AuthenticationService, private coneccionInfo: ConeccionInfo ) { }
  public getEventos(): Promise<Evento[]> {
    return this.http
    .get(this.coneccionInfo.url_eventos , {headers: this.coneccionInfo.headers} )
    .toPromise()
    .then(response => {
      return JSON.parse(response.text()).results as Evento[]
    });
  }
  public getEvento(id: number): Observable<Evento>  {
    return this.http
    .get(this.coneccionInfo.url_eventos + id.toString(), {headers: this.coneccionInfo.headers})
    .map( response =>   JSON.parse(response.text().toString()) as Evento) ;

  }
  public crearEvento(evento: Evento): Promise<Evento | JSON> {
    /*let myParams = new URLSearchParams();
    myParams.append('file', evento.imagen);*/
    var headersBetha = new Headers(this.coneccionInfo.headers);
    headersBetha.delete('Content-Type');
    let formData = new FormData();
    formData.append("nombre", evento.nombre);
    formData.append('descripcion', evento.descripcion);
    formData.append('precio', evento.precio.toString());
    formData.append('fechaInicio', evento.fechaInicio);
    formData.append('fechaFinalizacion', evento.fechaFinalizacion);
    formData.append('imagen', evento.imagen);
    return this.http
    .post(this.coneccionInfo.url_eventos ,
       formData ,
        {headers: this.coneccionInfo.headers,
        },
      )
    .toPromise()
    .then(response =>   {
      console.log(response.text());
      return (JSON.parse(response.text().toString()) as Evento)  ; }  )
    .catch(response => {
      console.log(response.text());
      return  JSON.parse(response.text().toString());
    });
  }
  public getOpciones(): Observable<JSON> {
    return this.http
    .options(this.coneccionInfo.url_eventos ,  {headers: this.coneccionInfo.headers})
    .map(response => JSON.parse(response.text().toString())  )
;
  }

  deleteEvent(event: Evento) {
    return this.http
    .delete(this.coneccionInfo.url_eventos + event.id +  '/' , {headers: this.coneccionInfo.headers})
    .toPromise()
    .then(
      response => {
        console.log(response.text());
        return (JSON.parse(response.text().toString()) as Evento);
      }
    )
    .catch(
      response => {
        return response;
      }
    );
  }
  updateEvent(event: Evento): Promise<Evento | JSON> {
    var headersBetha = new Headers(this.coneccionInfo.headers);
    headersBetha.delete('Content-Type');
    let formData = new FormData();
    formData.append('nombre', event.nombre);
    formData.append('descripcion', event.descripcion);
    formData.append('precio', event.precio.toString());
    formData.append('fechaInicio', event.fechaInicio);
    formData.append('fechaFinalizacion', event.fechaFinalizacion);
    formData.append('imagen', event.imagen);
     return this.http
    .put(this.coneccionInfo.url_eventos + event.id +  '/', formData ,
     {headers: headersBetha})
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
