import { InscripcionInterface } from './inscripcion.interface';
import { Usuario } from './usuario.class';

export class InscripcionConUsuario implements InscripcionInterface {
    
    id: string;
    evento: string;
    participante: Usuario;
    estado: string;
    fechaRegistro: string;
    fechaModificacion: string;

    constructor() {
        this.id = '';
        this.evento = '';
        this.estado = '';
        this.fechaRegistro = '';
        this.participante = new Usuario();
        this.fechaModificacion = '';
    }
}