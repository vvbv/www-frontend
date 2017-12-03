import { Injectable } from '@angular/core';
import { Usuario } from '../modelos/usuario.class';
import { ConeccionInfo } from './coneccion.info';
import { AuthenticationService } from './authentication.service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class UsuarioService {
    public usuario: Usuario;
    constructor(private http: Http, private coneccionInfo: ConeccionInfo ) {
        this.usuario = null;
    };

    public crearUsuario(usuario: Usuario): Promise<Usuario> {
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

    public getUsuarioById(id: number): Promise<Usuario>{
        return this.http
        .get(this.coneccionInfo.url_usuarios + 'usuario/'  + id +'/', {headers: this.coneccionInfo.headers})
        .toPromise()
        .then(
            response =>  {
                return (JSON.parse(response.text().toString()) as Usuario);
            }
        );
    }

    public getUsuario(username:string): Promise<Usuario>{
        return this.http
        .get(this.coneccionInfo.url_usuarios + 'usuario/byUsername/' + username + '/', {headers: this.coneccionInfo.headers})
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

    public almacenarUsuario(username: string): void {
        localStorage.setItem('username', username);
    }

    public recuperarUsuarioGlobal(): boolean{
        let retorno: boolean;
        const username: string = localStorage.getItem('username');
        this.getUsuario(username).
        then(response => {this.usuario = response; retorno = true})
        .catch(response => {console.log(response); retorno = false;});
        return retorno;
    }


    public recuperarUsuario(): Promise<Usuario> {
        const username: string = localStorage.getItem('username');
        this.getUsuario(username).then(response => {this.usuario = response; return this.usuario});
        return  this.getUsuario(username);
    }

    public actualizarMiPerfil(usuarioActualizado: Usuario): Promise<JSON>{
        return this.recuperarUsuario().then(
            response => {
                var usuarioLogueado = response;
                if(usuarioLogueado.username == usuarioActualizado.username){
                    usuarioActualizado.username = usuarioLogueado.username;
                    usuarioActualizado.custom_email = usuarioLogueado.custom_email;
                    usuarioActualizado.numero_identificacion = usuarioLogueado.numero_identificacion;
                    return this.actualizarUsuario(usuarioActualizado);
                }else{
                    return JSON.parse('{}');
                }
            }
        ).catch();
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
                return (JSON.parse(response.text().toString()) as Usuario[]);
            }
        );
    }

    public cambiarEstadoUsuario(idUsuario: string, isActivo: boolean): Promise<JSON>{
        let estadoActivo = 'true';
        if(!isActivo){
            estadoActivo = 'false'
        }
        return this.getUsuario(idUsuario).then(
            response => {
                let usuario = response;
                usuario.estadoHabilitado = estadoActivo;
                return this.actualizarUsuario(usuario);
            }
        )
    }

}