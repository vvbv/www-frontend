import { Injectable } from '@angular/core';
import { Usuario } from '../modelos/usuario.class';
import { ConeccionInfo } from './coneccion.info';
import { AuthenticationService } from './authentication.service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { async } from 'q';
import { MedioDePago } from 'app/modelos/medio-pago.class';


@Injectable()
export class UsuarioService {
    public usuario$: Promise<Usuario>;
    public usuario: Usuario;
    public urlImagenUsuario$: Promise<string>;
    constructor(private http: Http, private coneccionInfo: ConeccionInfo ) {
        this.usuario$ = null;
        this.usuario = null;
        this.urlImagenUsuario$ = null;
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
                console.log(JSON.parse(response.text())['imagen']);
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
        then(response => {retorno = true})
        .catch(response => {console.log(response); retorno = false;});
        return retorno;
    }

    public obtenerUrlImgenUsuarioActualCache(): Promise<string>{
        if(this.urlImagenUsuario$ === null && this.usuario===null) {
            return  this.recuperarUsuario()
                .then(response=> {
                    this.urlImagenUsuario$ =  this.getImagenPerfil(this.usuario.imagenPerfil);
                    return this.urlImagenUsuario$;
                }
                );
                
            }


            else{       
                if(this.urlImagenUsuario$ === null) {
                    this.urlImagenUsuario$ =  this.getImagenPerfil(this.usuario.imagenPerfil);
                    return this.urlImagenUsuario$;
                
                }else{
                    return this.urlImagenUsuario$;
                    }
                
            }
            
        }
    

    public obtenerUsuarioActualCache(): Promise<Usuario> {
        if(this.usuario$ === null){
            this.usuario$ = this.recuperarUsuario ().
            then(response => {
                this.usuario = response; 
                console.log(this.usuario);
                this.obtenerUrlImgenUsuarioActualCache();
                return response;});

            return this.usuario$;
            }
        else{
            return this.usuario$;
        }
    }
    public recuperarUsuario(): Promise<Usuario> {
        const username: string = localStorage.getItem('username');
        this.usuario$ =  this.getUsuario(username);
        return this.usuario$;
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

    public registrarMedioPago(medioPago: MedioDePago): Promise<JSON>{
        return this.http
        .get(this.coneccionInfo.getUrlRegistrarMedioPago(medioPago.usuario, medioPago.numero_cuenta, medioPago.clave))
        .toPromise()
        .then(response=>  {console.log(response); return (JSON.parse(response.text().toString()) as JSON);})
        .catch(response => {return (JSON.parse(response.text().toString()))} )
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