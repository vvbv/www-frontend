import { InscripcionInterface } from './inscripcion.interface';

export class Inscripcion implements InscripcionInterface {
    
    id: string;
    evento: string;
    participante: string;
    estado: string;
    fechaRegistro: string;
    fechaModificacion: string;

    constructor() {
        this.id = '';
        this.evento = '';
        this.participante = '';
        this.estado = '';
        this.fechaRegistro = '';
        this.fechaModificacion = '';
    }
}