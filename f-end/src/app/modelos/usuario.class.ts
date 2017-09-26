import { UsuarioInterface } from './usuario.interface';

export class Usuario implements UsuarioInterface {
    
    username: string;
    password: string;
    rol: string;

    constructor() {
        
        this.username = '';
        this.password = '';
        this.rol = '';
    }
}

