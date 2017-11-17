import { Injectable } from '@angular/core';
import { PreInscripcion } from '../modelos/preInscripcion.class';
import { Inscripcion } from '../modelos/inscripcion.class';
import { Usuario } from '../modelos/usuario.class';
import { Evento } from '../modelos/evento.class';
import { ConeccionInfo } from './coneccion.info';
import { AuthenticationService } from './authentication.service';
import { InscripcionService } from './inscripcion.service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { PreInscripcionEstructura } from '../modelos/preInscripcionEstructura';


@Injectable()
export class PreInscripcionService {

    constructor(private http: Http,
        private coneccionInfo: ConeccionInfo,
        private inscripcionService: InscripcionService
    ){};

    public getPreinscripcion(idPreinscripcion: string): Promise<PreInscripcion>{
        return this.http
        .get(this.coneccionInfo.url_preinscripcion + idPreinscripcion, {headers: this.coneccionInfo.headers})
        .toPromise()
        .then(
            response =>  {
                return (JSON.parse(response.text().toString()) as PreInscripcion);
            }
        );
    }

    public getPreInscripcionByUserAndEvent(usuario: Usuario, evento: Evento): Promise<PreInscripcion | null> {
        return this.http
        .get(this.coneccionInfo.url_get_preinscricion_por_usuario_evento
             + usuario.id + '/' + evento.id + '/',
             {headers: this.coneccionInfo.headers})
        .toPromise()
        .then(
            response => {
               if (Number(JSON.parse(response.text().toString()).count) === 0) {
                   return null;
               }
                return (JSON.parse(response.text().toString())[0] as PreInscripcion);
            }
        ).catch(response =>
            {
                console.log(response);
                return null;
            });
    }

    public getPreInscripcionByUserAndEventIds(idUsuario: string, idEvento: string): Promise<PreInscripcion | null> {
        return this.http
        .get(this.coneccionInfo.url_get_preinscricion_por_usuario_evento
             + idUsuario + '/' + idEvento + '/',
             {headers: this.coneccionInfo.headers})
        .toPromise()
        .then(
            response => {
               if (Number(JSON.parse(response.text().toString()).count) === 0) {
                   return null;
               }
                return (JSON.parse(response.text().toString())[0] as PreInscripcion);
            }
        ).catch(response =>
            {
                console.log(response);
                return null;
            });
    }

    public getPreInscripcionesPorEvento(evento: Evento): Promise<PreInscripcion[] | null>{
        return this.http
        .get(this.coneccionInfo.url_pre_inscripciones_por_evento  + evento.id + '/',
        {headers: this.coneccionInfo.headers})
        .toPromise()
        .then(
            response=> {
               
                return (JSON.parse(response.text().toString()) as PreInscripcion[]);
            }
            )
            .catch(response=>
            {
                console.log(response);
                return null;
            });
    }
    public getOpciones(): Promise <PreInscripcionEstructura> {
        return this.http
        .options(this.coneccionInfo.url_preinscripcion,
        {headers: this.coneccionInfo.headers})
        .toPromise()
        .then(response =>{
            return JSON.parse(response.text().toString())['actions']['POST'] as PreInscripcionEstructura; })
        .catch(response => {console.log(response); return response; } );
}

    public registrarPreInscripcion(preInscripcion: PreInscripcion): Promise<JSON|PreInscripcion> {
        return this.http
        .post(this.coneccionInfo.url_preinscripcion, JSON.stringify(preInscripcion), {headers: this.coneccionInfo.headers})
        .toPromise()
        .then(
            response =>  {
                return (JSON.parse(response.text().toString()) as PreInscripcion);
            }
        ).catch(
            response => {
                return  (response.text().toString());

            }
        );
    }
    public actualizarPreinscripcion(preInscripcion: PreInscripcion): Promise<JSON|PreInscripcion> {
        return this.http
        .put(this.coneccionInfo.url_preinscripcion + '/' + preInscripcion.id,
         JSON.stringify(preInscripcion), {headers: this.coneccionInfo.headers})
        .toPromise()
        .then(
            response =>  {
                return (JSON.parse(response.text().toString()) as PreInscripcion);
            }
        ).catch(
            response => {
                return  (response.text().toString());

            }
        );
    }

    /*
        Estados posibles:
        A: Aceptado.
        R: Rechazado.
        E: En espera.
    */
    private cambiarEstadoPreInscripcion(preinscripcion: PreInscripcion, estado: string): Promise<PreInscripcion>{
                preinscripcion.estado = estado;
                return this.http.put(this.coneccionInfo.url_preinscripcion  + preinscripcion.id + '/',
                     JSON.stringify(preinscripcion), {headers: this.coneccionInfo.headers})
                .toPromise()
                .then(
                    retorno => {
                        return JSON.parse(retorno.text().toString()) as PreInscripcion;
                    }
                );
    }
    public cancelarPreinscripcion( preinsCripcion: PreInscripcion): Promise<PreInscripcion|JSON> {
        return this.http
        .delete(this.coneccionInfo.url_preinscripcion + preinsCripcion.id + '/' ,  {headers: this.coneccionInfo.headers})
        .toPromise()
        .then(
            response =>  {
                return  (response.text().toString());
            }
        ).catch(
            response => {
                console.log(response.text().toString());
                return  (response.text().toString());

            }
        );
    }

    // Azucar
    public aceptarPreinscripcion( preinsCripcion: PreInscripcion): Promise<PreInscripcion|JSON>{
        return this.cambiarEstadoPreInscripcion(preinsCripcion, 'A');
    }
    public rechazarPreinscripcion(idPreinscripcion): Promise<PreInscripcion|JSON> {
        return this.cambiarEstadoPreInscripcion(idPreinscripcion, 'R');
    }

}