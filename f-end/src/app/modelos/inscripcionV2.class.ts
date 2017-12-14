import { InscripcionInterfaceV2 } from './inscripcionV2.interface';

export class InscripcionV2 implements InscripcionInterfaceV2 {
    
    id: string;
    evento: any;
    participante: any;
    estado: string;
    fechaRegistro: string;
    fechaModificacion: string;

    init(id: string, evento: any, 
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