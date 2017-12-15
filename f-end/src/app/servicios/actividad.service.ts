import { ActividadEstructura } from '../modelos/actividadEstructura.class';
import { ConeccionInfo } from './coneccion.info';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Actividad } from '../modelos/actividad.class';
import { ActividadV2 } from '../modelos/actividadV2.class';
import { Asistencia } from '../modelos/asistencia.class';
import { Observable } from 'rxjs/Observable';
import { Usuario } from '../modelos/usuario.class';


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

  public getActividadesByEvent(idEvento: number): Promise<Actividad[]> {
    return this.http
    .get(this.coneccionInfo.url_actividades_byEvent + idEvento.toString() + '/' , {headers: this.coneccionInfo.headers} )
    .toPromise()
    .then(response =>  JSON.parse(response.text().toString()) as Actividad[])
    .catch(response => {
      return response;
    });
  }
  public getActividadesByUser(usuario: Usuario): Promise <Actividad[] | null>{
    return this.http
    .get(this.coneccionInfo.getUrlActivivdadesByUser(usuario))
    .toPromise()
    .then(response =>  JSON.parse(response.text().toString()) as Actividad[])
    .catch(response => {console.log(response); return response} );
  }

  public getActividad(id: number): Observable<Actividad>  {
    return this.http
    .get(this.coneccionInfo.url_actividades + id.toString() + '/', {headers: this.coneccionInfo.headers})
    .map( response =>   JSON.parse(response.text().toString()) as Actividad) ;
  }

  public getActividadV2(id: number): Observable<ActividadV2>  {
    return this.http
    .get(this.coneccionInfo.url_actividades + id.toString() + '/', {headers: this.coneccionInfo.headers})
    .map( response =>   JSON.parse(response.text().toString()) as ActividadV2) ;
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

  //Retorna solo un JSON, para facilitar el manejo.
  public crearActividadV2(actividad: ActividadV2): Promise<JSON> {
    return this.http
    .post(this.coneccionInfo.url_actividades_crear , JSON.stringify(actividad) ,  {headers: this.coneccionInfo.headers})
    .toPromise()
    .then(response =>   {
      return JSON.parse(response.text().toString());})
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

  public deleteActividad(actividad: Actividad): Promise < JSON > {
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
  public updateActividad(actividad: Actividad): Promise<Actividad | JSON> {
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

  public updateActividadV2(actividad: ActividadV2): Promise<ActividadV2> {
    return this.http
   .put(this.coneccionInfo.url_actividades + actividad.id +  '/', JSON.stringify(actividad) , {headers: this.coneccionInfo.headers})
   .toPromise()
   .then(
     response => {
       return (JSON.parse(response.text().toString())as ActividadV2);
     }
   )
   .catch(
     response => {
       return (JSON.parse(response.text().toString()))as ActividadV2;
     }
   );
 }

  public  getActividadPromesa(idActiviad: number): Promise<Actividad>{
    return this.http
    .get(this.coneccionInfo.url_actividades + idActiviad.toString() + '/', {headers: this.coneccionInfo.headers} )
    .toPromise()
    .then(response =>  JSON.parse(response.text().toString()) as Actividad[])
    .catch(response => {
      return response;
    });
  }

  public  getActividadPromesaV2(idActiviad: number): Promise<ActividadV2>{
    return this.http
    .get(this.coneccionInfo.url_actividades + idActiviad.toString() + '/', {headers: this.coneccionInfo.headers} )
    .toPromise()
    .then(response =>  JSON.parse(response.text().toString()) as ActividadV2)
    .catch(response => {
      return response;
    });
  }

  public  getAsistenciasPromesa(idAsistencia: number): Promise<JSON>{
    return this.http
    .get(this.coneccionInfo.url_asistencia + idAsistencia.toString() + '/', {headers: this.coneccionInfo.headers} )
    .toPromise()
    .then(response =>  JSON.parse(response.text().toString()) as JSON[])
    .catch(response => {
      return response;
    });
  }

  public  getTodasAsistenciasPromesa(): Promise<JSON[]>{
    return this.http
    .get(this.coneccionInfo.url_asistencia, {headers: this.coneccionInfo.headers} )
    .toPromise()
    .then(response =>  JSON.parse(response.text().toString()) as JSON[])
    .catch(response => {
      return response;
    });
  }

  public eliminarParticipanteActividad(idActividad: string, idUsuario: string): Promise<JSON>{
    
    return this.getTodasAsistenciasPromesa().then(
      response => {
        for(var key of response){
          console.log(key);
          if((key['actividad'] == idActividad)&&(key['participante'] == idUsuario)){
            
            return this.http
            .delete(this.coneccionInfo.url_asistencia + key['id'], {headers: this.coneccionInfo.headers})
            .toPromise()
            .then( 
              response_asistencia =>  {
                console.log("Log 2:" + response_asistencia);
                return JSON.parse('{}');
              }
            );
          }
        };
      }
    );

    /*return this.http
    .post(this.coneccionInfo.url_asistencia, JSON.stringify(asistencia), {headers: this.coneccionInfo.headers})
    .toPromise()
    .then( 
      response_asistencia =>  {
        return JSON.parse(response_asistencia.text().toString())
      }
    ).catch(
      response_asistencia =>  {
        return JSON.parse(response_asistencia.text().toString())
      }
    );*/
  }

  public registrarParticipanteActividad(idActividad: string, idUsuario: string): Promise<JSON> {

          let asistencia = new Asistencia();
          asistencia.participante = idUsuario;
          asistencia.actividad = idActividad;
          asistencia.fechaModificacion = null;
          asistencia.fechaRegistro = null;

          return this.http
          .post(this.coneccionInfo.url_asistencia, JSON.stringify(asistencia), {headers: this.coneccionInfo.headers})
          .toPromise()
          .then( 
            response_asistencia =>  {
              return JSON.parse(response_asistencia.text().toString())
            }
          ).catch(
            response_asistencia =>  {
              return JSON.parse(response_asistencia.text().toString())
            }
          );
  };

}
