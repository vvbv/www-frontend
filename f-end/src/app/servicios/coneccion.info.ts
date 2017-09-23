
import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
@Injectable()
export class ConeccionInfo {
    public token;
    public url_base: string;
    public url_base_api: string;
    public url_eventos: string;
    public url_obtener_token: string;
    public url_actualizar_token: string;
    public url_validar_token: string;
    public headers: Headers;
    constructor() {
        this.url_base = 'http://192.168.1.4:8000';
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.url_base_api = this.url_base + '/api';
        this.url_obtener_token = this.url_base_api + '/auth-jwt/';
        this.url_eventos = this.url_base_api + '/eventos/';
    }
}

