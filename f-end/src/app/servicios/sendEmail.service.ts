import { Injectable } from '@angular/core';
import { ConeccionInfo } from './coneccion.info';
import { AuthenticationService } from './authentication.service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class SendEmailService {
    constructor(private http: Http, private coneccionInfo: ConeccionInfo ) {};

    public sendEmail(mensaje: JSON): void{
        this.http
        .post(this.coneccionInfo.url_sendEmail, mensaje, {headers: this.coneccionInfo.headers})
        .toPromise()
        .then()
    }

}