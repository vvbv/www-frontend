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
            localStorage.setItem('tok', (JSON.parse(response.text().toString())['token']));
            this.coneccionInfo.headers.append('Authorization', 'JWT ' + localStorage.getItem('tok'));
        })
        .catch();
    }
    updateToken() {
        return this.http
        .get(this.coneccionInfo.url_actualizar_token)
        .toPromise()
        .then(response =>  {
            localStorage.setItem('tok', (JSON.parse(response.text().toString())['token']));
            this.coneccionInfo.headers.append('Authorization', 'JWT ' + localStorage.getItem('tok'));
        })
        .catch();
    }
    isValid(token: string): Promise<boolean> {
        return this.http
        .post(this.coneccionInfo.url_validar_token, JSON.parse('{"token": "' + token + '"}'))
        .toPromise()
        .then(response =>  {
            if (JSON.parse(response.text())) {
                return true;
            }
        })
        .catch();
    }
}
