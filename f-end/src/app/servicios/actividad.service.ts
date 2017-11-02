import { ActividadEstructura } from '../modelos/actividadEstructura.class';
import { ConeccionInfo } from './coneccion.info';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Actividad } from '../modelos/actividad.class';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class ActividadService {
  constructor( private http: Http, private authenticationService: AuthenticationService, private coneccionInfo: ConeccionInfo ) { }
  public getActividades(idEvento: number): Promise<Actividad[]> {
    return this.http
    .get(this.coneccionInfo.url_actividades_porEvento + idEvento + '/' , {headers: this.coneccionInfo.headers} )
    .toPromise()
    .then(response =>  JSON.parse(response.text().toString()).results as Actividad[])
    .catch(response => {
      return response;
    });
  }
  public getActividad(id: number): Observable<Actividad>  {
    return this.http
    .get(this.coneccionInfo.url_actividades + id.toString() + '/', {headers: this.coneccionInfo.headers})
    .map( response =>   JSON.parse(response.text().toString()) as Actividad) ;

  }
  public crearActividad(actividad: Actividad): Promise<Actividad | JSON> {
    return this.http
    .post(this.coneccionInfo.url_actividades_crear , JSON.stringify(actividad) ,  {headers: this.coneccionInfo.headers})
    .toPromise()
    .then(response =>   {
      return (JSON.parse(response.text().toString()) as Actividad)  ; }  )
    .catch(response => {
      return  JSON.parse(response.text().toString());
    });
  }
  public getOpciones(): Observable<JSON> {
    return this.http
    .options(this.coneccionInfo.url_actividades_crear  ,  {headers: this.coneccionInfo.headers})
    .map(response => (JSON.parse(response.text().toString()))['actions']['POST'] )
;
  }

  deleteActividad(actividad: Actividad): Promise < JSON > {
    return this.http
    .delete(this.coneccionInfo.url_actividades + actividad.id +  '/' , {headers: this.coneccionInfo.headers})
    .toPromise()
    .then(
      response => {
        console.log(response.text());
        return (JSON.parse(response.text().toString()));
      }
    )
    .catch(
      response => {
        console.log(response.text());
        return (JSON.parse(response.text().toString()));
      }
    );

  }
  updateActividad(actividad: Actividad): Promise<Actividad | JSON> {
     return this.http
    .put(this.coneccionInfo.url_actividades + actividad.id +  '/', JSON.stringify(event) , {headers: this.coneccionInfo.headers})
    .toPromise()
    .then(
      response => {
        console.log(response.text());
        return (JSON.parse(response.text().toString()) as Actividad);
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
