import { PreInscripcionInterface } from './preInscripcion.interface';
import { Usuario } from './usuario.class';
export class PreInscripcionConUsuario implements PreInscripcionInterface {
    public id: string;
    public evento: string;
    public participante: Usuario;
    public fechaPreInscripcion: string;
    public estado: string;

    constructor() {
        this.id = '';
        this.evento = '';
        this.fechaPreInscripcion = '';
        this.estado = '';
        this.participante = new Usuario();
    }
}
