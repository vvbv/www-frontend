import { PreInscripcionInterface } from './preInscripcion.interface';

export class PreInscripcion implements PreInscripcionInterface{
    public id: string;
    public evento: string;
    public participante: string;
    public fechaPreInscripcion: string;
    public estado: string;

    constructor(){
        this.id = '';
        this.evento = '';
        this.participante = '';
        this.fechaPreInscripcion = '';
        this.estado = '';
    }
}