import { JsonFormatter } from 'tslint/lib/formatters';

import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Evento } from '../eventos/evento';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class Coneccion {
  private base_url: string;
  private url_get_token: string;
  private url_refresh_token: string;
  private url_get_eventos: string;
  private url_verify_token: string;
  private url_save_evento: string;
  public token: string;
  private headers: Headers;
  constructor (private http: Http) {}
  init(base_url: string, url_get_token: string, url_refresh_token: string,
       url_verify_token: string, url_get_eventos: string, url_save_evento: string) {
             this.base_url = base_url;
             this.url_get_token = url_get_token;
             this.url_refresh_token = url_refresh_token;
             this.url_verify_token = url_verify_token;
             this.url_get_eventos = url_get_eventos;
             this.url_save_evento = url_save_evento;
             this.headers = new Headers({'Content-Type': 'application/json'});
  }

  public getBaseUrl(): string {
      return this.base_url;
  }
  public getUrlGetToken(): string {
      return this.url_get_token;
  }
  public getUrlRefreshToken(): string {
      return this.url_refresh_token;
  }
  public getUrlVerifyToken(): string {
      return this.url_verify_token;
  }
  /*
   * Obtiene el token si exite, retorna falso en caso contrario
   * @returns string | boolean
   */
  /*
   * Obtiene el token de la url siempre y cuando se hallan configurado correctamente
   * tanto la base url como la url para obtener el token
   */

  public  obtenerToken(username: string, password: string): Promise<string> {
    var headers = new Headers();
    headers.append('username', username);
    headers.append('password', password);
    headers.append('Content-Type', 'application/json');
    return this.http
                     .post(this.base_url + this.url_get_token + '/', {'username': username, 'password': password})
                     .toPromise()
                     .then(response =>  {
                         localStorage.setItem('tok', (JSON.parse(response.text().toString())['token']));
                         console.log(localStorage.getItem('tok'));
                     })
                     .catch(this.handleError);
    }

    public logout(){
        localStorage.removeItem('tok');
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
      }

  protected validarRutas(): boolean {
    if (!this.base_url) {
        console.error('Debe definir primero una url base');
        return false;
    }
    if (!this.url_get_token) {
        console.error('Debe definir una url para el token');
        return false;
    }
  }
  public getEventos(): Promise<Evento[]> {
    return this.http
    .get(this.base_url + this.url_get_eventos + '/', {headers: this.headers } )
    .toPromise()
    .then(response =>  JSON.parse(response.text().toString()).results as Evento[])
    .catch(this.handleError);
  }
  public crearEvento(evento: Evento): Promise<Evento> {
    return this.http
    .post(this.base_url + this.url_get_eventos + '/', JSON.stringify(evento) ,  {headers: this.headers})
    .toPromise()
    .then(response => JSON.parse(response.text().toString()).results as Evento )
    .catch(this.handleError);
  }

  public getToken(): string | boolean {
      if (this.token) {
          return this.token;
      }else {
          console.log('No se ha obtenido el token');
      }
  }

}
export class Token {
    token: string;
    constructor(token: string) { this.token = token; }
}