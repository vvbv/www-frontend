import { InscripcionInterface } from './inscripcion.interface';

export class Inscripcion implements InscripcionInterface {
    
    id: string;
    evento: string;
    participante: any;
    estado: string;
    fechaRegistro: string;
    fechaModificacion: string;

    constructor() {
        this.id = '';
        this.evento = '';
        this.estado = '';
        this.fechaRegistro = '';
        this.fechaModificacion = '';
    }
}