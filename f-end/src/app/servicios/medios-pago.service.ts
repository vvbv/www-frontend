import { ConeccionInfo } from './coneccion.info';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { MedioDePago } from '../modelos/medio-pago.class';
import 'rxjs/add/operator/map';
@Injectable()
export class MediosPagoService {
    constructor(
        private http: Http,
        private coneccionInfo: ConeccionInfo
    ) {}

    getMedioPagoPorUserName(username: string): Promise <MedioDePago> {
        return this.http
        .get(this.coneccionInfo.url_get_medio_pago_username + username + '/')
        .toPromise()
        .then(
            response => JSON.parse(response.text().toString()) as MedioDePago
        ).catch(
            response => {
             console.log(response);
             return null;
            }
        )
    }
    registrarMedioDePago(username: string, numero_cuenta: string,  password: string): Promise <JSON> {
        return this.http
        .get(this.coneccionInfo.getUrlRegistrarMedioPago(username, numero_cuenta, password))
        .toPromise()
        .then(
            response => JSON.parse(response.text().toString())
        ).catch(
            response => {
             console.log(response);
             return null;
            }
        )
    }
}
