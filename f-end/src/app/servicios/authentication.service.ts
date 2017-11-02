import { InjectorToken } from './injectorToken.service';
import { JsonFormatter } from 'tslint/lib/formatters';

import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Evento } from '../modelos/evento.class';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ConeccionInfo } from './coneccion.info';

@Injectable()
export class  AuthenticationService  {
    constructor (private http: Http, private coneccionInfo: ConeccionInfo,  private injectorToken: InjectorToken) {}
  /*
   * Obtiene el token si exite, retorna falso en caso contrario
   * @returns string | boolean
   */
  /*
   * Obtiene el token de la url siempre y cuando se hallan configurado correctamente
   * tanto la base url como la url para obtener el token
   */

  public  obtenerYAlmacenarToken(username: string, password: string): Promise<string> {
    var headers = new Headers();
    headers.append('username', username);
    headers.append('password', password);
    headers.append('Content-Type', 'application/json');

    return this.http
                     .post(this.coneccionInfo.url_obtener_token , {'username': username, 'password': password})
                     .toPromise()
                     .then(response =>  {
                         localStorage.setItem(this.coneccionInfo.token_name, (JSON.parse(response.text().toString())['token']));
                         this.injectorToken.inyectarTokenConeccionInfo();
                     })
                     .catch(this.handleError);
    }

    public logout() {
        localStorage.removeItem(this.coneccionInfo.token_name);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
      }


}

