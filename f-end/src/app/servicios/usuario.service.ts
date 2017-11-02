import { Injectable } from '@angular/core';
import { Usuario } from '../modelos/usuario.class';
import { ConeccionInfo } from './coneccion.info';
import { AuthenticationService } from './authentication.service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class UsuarioService{

    constructor(private http: Http, private coneccionInfo: ConeccionInfo ){};
    

    public crearUsuario(usuario:Usuario): Promise<Usuario>{
        return this.http
        .post(this.coneccionInfo.url_usuarios + 'usuario/nuevo/', JSON.stringify(usuario), {headers: this.coneccionInfo.headers})
        .toPromise()
        .then(
            response =>  {
                return (JSON.parse(response.text().toString()) as Usuario);
            }
        ).catch(
            response => {
                return  (JSON.parse(response.text().toString()) as Usuario);
            }
        );
    }

    public getUsuario(username:string): Promise<Usuario>{
        return this.http
        .get(this.coneccionInfo.url_usuarios + 'usuario/byUsername/' + username, {headers: this.coneccionInfo.headers})
        .toPromise()
        .then(
            response =>  {
                return (JSON.parse(response.text().toString()) as Usuario);
            }
        );
    }

    public getEstructuraUsuario(): Promise<JSON>{
        return this.http
        .options(this.coneccionInfo.url_usuarios + 'usuario/nuevo/', {headers: this.coneccionInfo.headers})
        .toPromise()
        .then(
            response =>  {
                return (JSON.parse(response.text().toString())['actions']['POST']);
            }
        );
    }

    public getImagenPerfil(idImagen: string): Promise<string>{
        return this.http
        .get(this.coneccionInfo.url_imagenes + 'imagen/' + idImagen, {headers: this.coneccionInfo.headers})
        .toPromise()
        .then(
            response => {
                return JSON.parse(response.text())['imagen'];
            }
        );
    }

    public almacenarUsuario(username:string): void{
        localStorage.setItem('username', username);
    }

    public recuperarUsuario(): Promise<Usuario>{
        var username:string = localStorage.getItem('username');
        return this.getUsuario(username);
    }

    public actualizarUsuario(usuario: Usuario): Promise< JSON > {
            return this.http
            .put(this.coneccionInfo.url_usuarios + 'usuario/byUsername/' + usuario.username + '/', JSON.stringify(usuario), {headers: this.coneccionInfo.headers})
            .toPromise()
            .then(response =>   {
                return JSON.parse(response.text().toString())  ; 
            })
            .catch(response => {
                return JSON.parse(response.text().toString());
            });
    }

    public getUsuarios(): Promise<Usuario[]>{
        return this.http
        .get(this.coneccionInfo.url_usuarios, {headers: this.coneccionInfo.headers})
        .toPromise()
        .then(
            response =>  {
                console.log(JSON.parse(response.text().toString()) );
                return (JSON.parse(response.text().toString()).results as Usuario[]);
            }
        );
    }

}