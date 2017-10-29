import { Injectable } from '@angular/core';
import { PreInscripcion } from '../modelos/preInscripcion.class';
import { ConeccionInfo } from './coneccion.info';
import { AuthenticationService } from './authentication.service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class PreInscripcionService{

    constructor(private http: Http, private coneccionInfo: ConeccionInfo ){};
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

}