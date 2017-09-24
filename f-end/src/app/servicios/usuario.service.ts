import { Injectable } from '@angular/core';
import { Usuario } from '../modelos/usuario.class';
import { ConeccionInfo } from './coneccion.info';
import { AuthenticationService } from './authentication.service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { routerTransition } from '../router.animations';

@Injectable()
export class UsuarioService{

    constructor(private http: Http, private coneccionInfo: ConeccionInfo ){};

    public getUsuario(username:string):Promise<Usuario>{
        return this.http
        .get(this.coneccionInfo.url_usuarios + 'usuario/byUsername/' + username,  {headers: this.coneccionInfo.headers} )
        .toPromise()
        .then(response =>  JSON.parse(response.text().toString()) as Usuario )
    }
}