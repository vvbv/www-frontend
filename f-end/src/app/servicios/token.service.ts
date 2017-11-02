import { JsonFormatter } from 'tslint/lib/formatters';

import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Evento } from '../modelos/evento.class';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ConeccionInfo } from './coneccion.info';

@Injectable()

export class TokenService {
    constructor (private http: Http, private coneccionInfo: ConeccionInfo) {

    }

    initToken(username: string, password: string) {
        return this.http
        .post(this.coneccionInfo.url_obtener_token , {'username': username, 'password': password})
        .toPromise()
        .then(response =>  {
            localStorage.setItem(this.coneccionInfo.token_name, (JSON.parse(response.text().toString())['token']));
            this.coneccionInfo.headers.append('Authorization', 'JWT ' + localStorage.getItem(this.coneccionInfo.token_name));
        })
        .catch();
    }
    updateToken() {
        return this.http
        .post(this.coneccionInfo.url_actualizar_token,
            '{"token": "'
        + localStorage.getItem('tok')
       + '"}',
    {headers: this.coneccionInfo.headers} )
        .toPromise()
        .then(response =>  {
            localStorage.setItem(this.coneccionInfo.token_name, (JSON.parse(response.text().toString())['token']));
            this.coneccionInfo.headers.append('Authorization', 'JWT ' + localStorage.getItem(this.coneccionInfo.token_name));
            this.coneccionInfo.token = localStorage.getItem('tok');
        })
        .catch(res => {
            console.log(res);
        });
    }
    isValid(token: string): Promise<boolean> {
        console.log('{"token": "' + localStorage.getItem(this.coneccionInfo.token_name) + '"}');
        return this.http
        .post(this.coneccionInfo.url_validar_token,
            '{"token": "'
             + this.coneccionInfo.token
            + '"}', {headers: this.coneccionInfo.headers})
        .toPromise()
        .then(response =>  {
            if (JSON.parse(response.text())) {
                return true;
            }
        })
        .catch(response => {
        console.log(response);
        return false; });
    }
}
