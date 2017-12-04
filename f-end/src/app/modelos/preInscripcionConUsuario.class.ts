import { PreInscripcionInterface } from './preInscripcion.interface';
import { Usuario } from './usuario.class';
import { PreInscripcion } from './preInscripcion.class';
export class PreInscripcionConUsuario implements PreInscripcionInterface {
    public id: string;
    public evento: string;
    public participante: Usuario;
    public fechaPreInscripcion: string;
    public estado: string;

    public toPreinscripcion(): PreInscripcion{
        var preinscripcion: PreInscripcion;
        preinscripcion.id = this.id;
        preinscripcion.evento = this.evento;
        preinscripcion.fechaPreInscripcion = this.fechaPreInscripcion;
        preinscripcion.estado = this.estado;
        preinscripcion.participante = this.participante.id;
        return preinscripcion;
    }
    constructor() {
        this.id = '';
        this.evento = '';
        this.fechaPreInscripcion = '';
        this.estado = '';
        this.participante = new Usuario();
    }

}
