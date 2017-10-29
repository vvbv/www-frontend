import { UsuarioInterface } from './usuario.interface';

export class Usuario implements UsuarioInterface {
    
    id: string;
    numero_identificacion: string;
    username: string;
    password: string;
    rol: string;
    imagenPerfil: string;
    nombres: string;
    apellidos: string;
    custom_email: string;
    estadoHabilitado: string;

    constructor() {
        this.id = '';
        this.numero_identificacion = '';
        this.username = '';
        this.password = '';
        this.rol = '';
        this.imagenPerfil = '';
        this.nombres = '';
        this.apellidos = '';
        this.custom_email = '';
        this.estadoHabilitado = '';
    }
}

