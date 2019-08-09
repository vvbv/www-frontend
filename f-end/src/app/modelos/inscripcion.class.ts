import { InscripcionInterface } from './inscripcion.interface';

export class Inscripcion implements InscripcionInterface {
    
    id: string;
    evento: string;
    participante: any;
    estado: string;
    fechaRegistro: string;
    fechaModificacion: string;

    init(id: string, evento: string, 
        estado: string, fechaRegistro: string, 
        participante: string,
        fechaMoficiacion: string){
        this.id = id;
        this.participante = participante;
        this.evento = evento;
        this.estado = estado;
        this.fechaModificacion=fechaMoficiacion;
        this.fechaRegistro = fechaRegistro;
    }

    constructor() {
        this.id = '';
        this.evento = '';
        this.estado = '';
        this.fechaRegistro = '';
        this.fechaModificacion = '';
    }
}