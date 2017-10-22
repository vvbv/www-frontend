import { UsuarioInterface } from './usuario.interface';

export class Usuario implements UsuarioInterface {
    
    username: string;
    password: string;
    rol: string;
    imagenPerfil: string;
    nombres: string;
    apellidos: string;
    email: string;
    estadoHabilitado: string;

    constructor() {
        
        this.username = '';
        this.password = '';
        this.rol = '';
        this.imagenPerfil = '';
        this.nombres = '';
        this.apellidos = '';
        this.email = '';
        this.estadoHabilitado = '';
    }
}

