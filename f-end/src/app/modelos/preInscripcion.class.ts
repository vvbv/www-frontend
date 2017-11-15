import { PreInscripcionInterface } from './preInscripcion.interface';

export class PreInscripcion implements PreInscripcionInterface {
    public id: string;
    public evento: string;
    public participante: any;
    public fechaPreInscripcion: string;
    public estado: string;

    constructor() {
        this.id = '';
        this.evento = '';
        this.fechaPreInscripcion = '';
        this.estado = '';
    }
}
