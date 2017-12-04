
import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
@Injectable()
export class ConeccionInfo {
    public token_name;
    public token;
    private token_prefix;
    public url_base: string;
    public url_base_api: string;
    public url_eventos: string;
    public url_preinscripcion: string;
    public url_inscripcion: string;
    public url_usuarios: string;
    public url_imagenes: string;
    public url_obtener_token: string;
    public url_actualizar_token: string;
    public url_actividades: string;
    public url_actividades_crear: string;
    public url_validar_token: string;
    public url_actividades_porEvento: string;
    public url_actividades_byEvent: string;
    public url_asistencia: string;
    public url_pre_inscripciones_por_evento: string;
    public url_pre_inscripciones_por_evento_con_usuarios: string;
    public url_noticias: string;
    public url_static_imagenes;
    public url_imagenes_crear;
    public url_imagenes_modificar;
    public headers: Headers;
    public url_inscripciones_por_evento:string;
    public url_get_inscricion_por_usuario_evento: string;
    public url_sendEmail: string;
    constructor() {
        this.token_name = 'tok';
        this.token_prefix = 'JWT';
        this.url_base = 'https://www-client-regalia-luchoman.c9users.io';
        this.url_base_api = this.url_base + '/api/v1';
        this.url_obtener_token = this.url_base_api + '/auth-jwt/';
        this.url_actualizar_token = this.url_base_api + '/auth-jwt-refresh/';
        this.url_validar_token = this.url_base_api + '/auth-jwt-verify/';
        this.url_eventos = this.url_base_api + '/eventos/';
        this.url_actividades = this.url_base_api + '/actividades/';
        this.url_actividades_crear = this.url_base_api + '/actividades/crear/';
        this.url_actividades_porEvento = this.url_base_api + '/actividades/porEvento/';
        this.url_actividades_byEvent = this.url_base_api + '/actividades/byEvent/';
        this.url_asistencia = this.url_base_api + '/asistencias/';
        this.url_preinscripcion = this.url_eventos + 'preinscripciones/';

        this.url_inscripcion = this.url_base_api + '/eventos/inscripciones/';
        this.url_usuarios = this.url_base_api + '/usuarios/';
        this.url_imagenes = this.url_base_api + '/imagenes/';
        this.url_static_imagenes = this.url_base + '/static/';
        this.url_imagenes_crear = this.url_imagenes + 'imagen/nueva/';
        this.url_inscripciones_por_evento = this.url_inscripcion + 'byEvent/';
        this.url_imagenes_modificar = this.url_imagenes + 'imagen/';
        this.url_noticias = this.url_base_api + '/noticias/';
        this.url_sendEmail = this.url_base_api + '/funcionesExtra/sendEmail';
        this.iniciarHeaders();
    }
    
    getUrlPreinscripcionesPorEventoPorUsuario(idEvento: number, idUsuario: number){
        return this.url_eventos + idEvento + '/preinscripciones/usuario/' + idUsuario + '/';
    }
    
    getUrlInscripcionesPorEvento(idEvento: number): string{
        return this.url_eventos + idEvento + '/inscripciones/' ;
    }
    getUrlPreinscripcionesPorEvento(idEvento: number): string{
        return this.url_eventos + idEvento + '/preinscripciones/' ;
    }
    getUrlPreinscripcionesPorEventoConUsuarios(idEvento: number): string{
        return this.url_eventos + idEvento+ '/preinscripcionesConUsuario';
    }
    iniciarHeaders() {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
            // Website you wish to allow to connect
      this.headers.delete('Access-Control-Allow-Origin');
        // Request methods you wish to allow
        this.headers.delete('Access-Control-Allow-Methods');
        // Request headers you wish to allow
        this.headers.delete('Access-Control-Allow-Headers');
        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        this.headers.delete('Access-Control-Allow-Credentials');
    }


    setToken(token: string) {
        this.token = token;
        this.headers.delete('Authorization');
        this.headers.append('Authorization', this.token_prefix + ' ' + token);
    }
}

