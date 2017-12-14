import { InscripcionEstructura } from '../modelos/inscripcionEstructura.class';
import { Injectable } from '@angular/core';
import { Inscripcion } from '../modelos/inscripcion.class';
import { InscripcionV2 } from '../modelos/inscripcionV2.class';
import { Evento } from '../modelos/evento.class';
import { Usuario } from '../modelos/usuario.class';
import { ConeccionInfo } from './coneccion.info';
import { PreInscripcionService } from './preInscripcion.service';
import { AuthenticationService } from './authentication.service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { PreInscripcion } from '../modelos/preInscripcion.class';
import { InscripcionConUsuario } from '../modelos/inscripcionConUsuario.class';
import { InscripcionConEvento } from '../modelos/inscripcionConEvento.class';

@Injectable()
export class InscripcionService {
    private preinscripcionService: PreInscripcionService
    constructor(private http: Http,
        private coneccionInfo: ConeccionInfo,
        ) {};
    public getInscripcion(idInscripcion: string): Promise<Inscripcion> {
        return this.http
        .get(this.coneccionInfo.url_inscripcion + idInscripcion, {headers: this.coneccionInfo.headers})
        .toPromise()
        .then(
            response =>  {
<<<<<<< HEAD
                return (JSON.parse(response.text().toString()) as Inscripcion);
=======
                console.log(response.text().toString());
                return (JSON.parse(response.text().toString()).results as Inscripcion);
>>>>>>> alpha
            }
        );
    }

    //.results [Se conserva la anterior para no causar alteraciones]
    public getInscripcionV2(idInscripcion: string): Promise<Inscripcion> {
        return this.http
        .get(this.coneccionInfo.url_inscripcion + idInscripcion, {headers: this.coneccionInfo.headers})
        .toPromise()
        .then(
            response =>  {
                console.log(response.text().toString());
                return (JSON.parse(response.text().toString()) as Inscripcion);
            }
        ).catch(
            response => {return null;}
        );
    }

    public getInscripcionesConEvento(usuario: Usuario): Promise<InscripcionConEvento[] | null>{
        return this.http
        .get(this.coneccionInfo.getUrlInscripcionesConEvento(Number(usuario.id)), 
        {headers: this.coneccionInfo.headers})
        .toPromise()
        .then(
            response => {
                return (JSON.parse(response.text().toString()) as InscripcionConEvento[])
            }
        )
        .catch(
            response => {
            console.log(response);
            return null;
            }
        );
    }

    public getOpciones(): Promise <InscripcionEstructura> {
        return this.http
        .options(this.coneccionInfo.url_inscripcion,
        {headers: this.coneccionInfo.headers})
        .toPromise()
        .then(response => {
            return JSON.parse(response.text().toString())['actions']['POST'] as InscripcionEstructura; })
        .catch(response => {console.log(response); return response; } );
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
            response => {
                return (JSON.parse(response.text().toString()) as Inscripcion[]);
            }
            )
            .catch(response => {
                console.log(response);
                return null;
            });
    }

    public getInscripciones(): Promise<InscripcionV2[] | null>{
        return this.http
        .get(this.coneccionInfo.url_inscripcion, {headers: this.coneccionInfo.headers})
        .toPromise()
        .then(
            response => {
                return (JSON.parse(response.text().toString()) as Inscripcion[]);
            }
            )
            .catch(response => {
                console.log(response);
                return null;
            });
    }

    public getInscripcionesPorEventoConUsuario(evento: Evento): Promise<InscripcionConUsuario[] | null>{
        const idEvento: number = Number(evento.id);
        return this.http
        .get(this.coneccionInfo.getUrlInscripcionesPorEventoConUsuarios(idEvento),
        {headers: this.coneccionInfo.headers})
        .toPromise()
        .then(
            response => {
                return (JSON.parse(response.text().toString()) as InscripcionConUsuario[]);
            }
            )
            .catch(response => {
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
    public aceptarInscripcion( inscripcion: Inscripcion): Promise<Inscripcion|JSON> {
        return this.cambiarEstadoInscripcion(inscripcion, 'A').then(
            response => {
             return response;
                        }
                    )
                    .catch(
                        retorno => {
                            return JSON.parse(retorno.text().toString());
                        }
                    );
            }

    public rechazarInscripcion(idInscripcion): Promise<Inscripcion|JSON> {
        return this.cambiarEstadoInscripcion(idInscripcion, 'R');
    }

}
