import { InscripcionInterface } from './inscripcion.interface';
import { Evento } from './evento.class';

export class InscripcionConEvento implements InscripcionInterface {
    
    id: string;
    evento: Evento;
    participante: any;
    estado: string;
    fechaRegistro: string;
    fechaModificacion: string;

    init(id: string, evento: Evento, 
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
        this.evento = new Evento();
        this.estado = '';
        this.fechaRegistro = '';
        this.fechaModificacion = '';
    }
}