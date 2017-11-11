
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
    public url_get_preinscricion_por_usuario_evento: string;
    public url_actividades: string;
    public url_actividades_crear: string;
    public url_validar_token: string;
    public url_actividades_porEvento: string;
    public headers: Headers;
    constructor() {
        this.token_name = 'tok';
        this.token_prefix = 'JWT';
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.url_base = 'https://myapp984654.herokuapp.com';
        this.url_base_api = this.url_base + '/api/v1';
        this.url_obtener_token = this.url_base_api + '/auth-jwt/';
        this.url_actualizar_token = this.url_base_api + '/auth-jwt-refresh/';
        this.url_validar_token = this.url_base_api + '/auth-jwt-verify/';
        this.url_eventos = this.url_base_api + '/eventos/';
        this.url_actividades = this.url_base_api + '/actividades/';
        this.url_actividades_crear = this.url_base_api + '/actividades/crear';
        this.url_actividades_porEvento = this.url_base_api + '/actividades/porEvento/';
        this.url_preinscripcion = this.url_base_api + '/eventos/preinscripciones/';
        this.url_get_preinscricion_por_usuario_evento = this.url_base_api + '/getIdPreinscripcion/porIdUsuarioIdEvento/';
        this.url_inscripcion = this.url_base_api + '/eventos/inscripciones/';
        this.url_usuarios = this.url_base_api + '/usuarios/';
        this.url_imagenes = this.url_base_api + '/imagenes/';
    }
    setToken(token: string) {
        this.token = token;
        this.headers.delete('Authorization');
        this.headers.append('Authorization', this.token_prefix + ' ' + token);
    }
}

