import { Injectable } from '@angular/core';
import { PreInscripcion } from '../modelos/preInscripcion.class';
import { Inscripcion } from '../modelos/inscripcion.class';
import { ConeccionInfo } from './coneccion.info';
import { AuthenticationService } from './authentication.service';
import { InscripcionService } from './inscripcion.service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class PreInscripcionService{

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

    public registrarPreInscripcion(preInscripcion:PreInscripcion): Promise<JSON|PreInscripcion>{
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

    /*
        Estados posibles:
        A: Aceptado.
        R: Rechazado.
        E: En espera.
    */
    private cambiarEstadoPreInscripcion(idPreinscripcion: string, estado: string): Promise<PreInscripcion>{
        return this.getPreinscripcion(idPreinscripcion).then(
            response => {
                var preInscripcion: PreInscripcion;
                preInscripcion = response;
                preInscripcion.estado = estado;
                return this.http.post(this.coneccionInfo.url_preinscripcion, JSON.stringify(preInscripcion), {headers: this.coneccionInfo.headers})
                .toPromise()
                .then(
                    retorno => {
                        return JSON.parse(retorno.text().toString()) as PreInscripcion;
                    }
                );
            }
        );
    }

    // Azucar
    public aceptarPreinscripcion(idPreinscripcion): Promise<PreInscripcion|JSON>{
        var preInscripcion: PreInscripcion;
        return this.cambiarEstadoPreInscripcion(idPreinscripcion, 'A').then(
            response => {
                var preInscripcion = response;
                const INSCRIPCION = new Inscripcion();
                INSCRIPCION.evento = preInscripcion.evento;
                INSCRIPCION.participante = preInscripcion.participante;
                 return this.http
                    .post(this.coneccionInfo.url_inscripcion, JSON.stringify(INSCRIPCION), {headers: this.coneccionInfo.headers})
                    .toPromise()
                    .then(
                        retorno => {
                            return JSON.parse(retorno.text().toString()) as PreInscripcion;
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
    public rechazarPreinscripcion(idPreinscripcion): Promise<PreInscripcion|JSON>{
        return this.cambiarEstadoPreInscripcion(idPreinscripcion, 'R');
    }

}