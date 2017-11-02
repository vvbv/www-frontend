import { Injectable } from '@angular/core';
import { Inscripcion } from '../modelos/inscripcion.class';
import { ConeccionInfo } from './coneccion.info';
import { AuthenticationService } from './authentication.service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class InscripcionService{

    constructor(private http: Http, private coneccionInfo: ConeccionInfo ){};
    
    public getInscripcion(idInscripcion: string): Promise<Inscripcion>{
        return this.http
        .get(this.coneccionInfo.url_inscripcion + idInscripcion, {headers: this.coneccionInfo.headers})
        .toPromise()
        .then(
            response =>  {
                return (JSON.parse(response.text().toString()).results as Inscripcion);
            }
        );
    }

    public registrarInscripcion(inscripcion: Inscripcion): Promise<Inscripcion>{
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

}