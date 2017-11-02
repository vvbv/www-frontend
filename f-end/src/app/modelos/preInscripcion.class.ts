import { PreInscripcionInterface } from './preInscripcion.interface';

export class PreInscripcion implements PreInscripcionInterface{
    public idPreinscripcion: string;
    public evento: string;
    public participante: string;
    public fechaPreInscripcion: string;
    public estado: string;

    constructor(){
        this.idPreinscripcion = '';
        this.evento = '';
        this.participante = '';
        this.fechaPreInscripcion = '';
        this.estado = '';
    }
}