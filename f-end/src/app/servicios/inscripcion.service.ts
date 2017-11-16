import { Injectable } from '@angular/core';
import { Inscripcion } from '../modelos/inscripcion.class';
import { Evento } from '../modelos/evento.class';
import { Usuario } from '../modelos/usuario.class';
import { ConeccionInfo } from './coneccion.info';
import { AuthenticationService } from './authentication.service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class InscripcionService {

    constructor(private http: Http, private coneccionInfo: ConeccionInfo ) {};
    public getInscripcion(idInscripcion: string): Promise<Inscripcion> {
        return this.http
        .get(this.coneccionInfo.url_inscripcion + idInscripcion, {headers: this.coneccionInfo.headers})
        .toPromise()
        .then(
            response =>  {
                return (JSON.parse(response.text().toString()).results as Inscripcion);
            }
        );
    }
    
        public getInscripcionByUserAndEvent(usuario: Usuario, evento: Evento): Promise<Inscripcion | null> {
        return this.http
        .get(this.coneccionInfo.url_get_inscricion_por_usuario_evento
             + usuario.id + '/' + evento.id + '/',
             {headers: this.coneccionInfo.headers})
        .toPromise()
        .then(
            response => {
               if (Number(JSON.parse(response.text().toString()).count) === 0) {
                   return null;
               }
                return (JSON.parse(response.text().toString())[0] as Inscripcion);
            }
        ).catch(response =>
            {
                console.log(response);
                return null;
            });
    }
    
    public getInscripcionesPorEvento(evento: Evento): Promise<Inscripcion[] | null>{
        return this.http
        .get(this.coneccionInfo.url_inscripciones_por_evento  + evento.id + '/',
        {headers: this.coneccionInfo.headers})
        .toPromise()
        .then(
            response=> {
               
                return (JSON.parse(response.text().toString()) as Inscripcion[]);
            }
            )
            .catch(response=>
            {
                console.log(response);
                return null;
            });
    }
    public registrarInscripcion(inscripcion: Inscripcion): Promise<Inscripcion> {
        return this.http
        .post(this.coneccionInfo.url_inscripcion, JSON.stringify(inscripcion), {headers: this.coneccionInfo.headers})
        .toPromise()
        .then(
            response =>  {
                return (JSON.parse(response.text().toString()) as Inscripcion);
            }
        ).catch(
            response => {
                return  (JSON.parse(response.text().toString()) as Inscripcion);
            }
        );
    }
    
    
    
    
    /*
        Estados posibles:
        A: Aceptado.
        R: Rechazado.
        E: En espera.
    */
    private cambiarEstadoInscripcion(inscripcion: Inscripcion, estado: string): Promise<Inscripcion>{
                inscripcion.estado = estado;
                return this.http.put(this.coneccionInfo.url_inscripcion  + inscripcion.id + '/',
                     JSON.stringify(inscripcion), {headers: this.coneccionInfo.headers})
                .toPromise()
                .then(
                    retorno => {
                        return JSON.parse(retorno.text().toString()) as Inscripcion;
                    }
                );
    }
    public cancelarInscripcion( inscripcion: Inscripcion): Promise<Inscripcion|JSON> {
        return this.http
        .delete(this.coneccionInfo.url_inscripcion + inscripcion.id + '/' ,  {headers: this.coneccionInfo.headers})
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
    public aceptarInscripcion( inscripcion: Inscripcion): Promise<Inscripcion|JSON>{
        return this.cambiarEstadoInscripcion(inscripcion, 'A').then(
            response => {
             
                var inscripcion = response;
                const INSCRIPCION = new Inscripcion();
                INSCRIPCION.evento = inscripcion.evento;
                INSCRIPCION.estado = 'E';
                INSCRIPCION.participante = inscripcion.participante;
                 return this.http
                    .post(this.coneccionInfo.url_inscripcion, JSON.stringify(INSCRIPCION), {headers: this.coneccionInfo.headers})
                    .toPromise()
                    .then(
                        retorno => {
                            return JSON.parse(retorno.text().toString()) as Inscripcion;
                        }
                    )
                    .catch(
                        retorno => {  
                            return JSON.parse(retorno.text().toString());
                        }
                    );
            }
        );
    }
    public rechazarInscripcion(idInscripcion): Promise<Inscripcion|JSON> {
        return this.cambiarEstadoInscripcion(idInscripcion, 'R');
    }

}
