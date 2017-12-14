import { PreInscripcionInterface } from './preInscripcion.interface';
import { Evento } from './evento.class';
import { PreInscripcion } from './preInscripcion.class';

export class PreinscripcionConEvento implements PreInscripcionInterface{
    id: any;
    evento: Evento;
    participante: string;
    fechaPreInscripcion: any;
    estado: any;

    toPreinscripcion(): PreInscripcion {
        let preinscipcion_correcta = new PreInscripcion();
        preinscipcion_correcta.id = this.id;
        preinscipcion_correcta.estado = this.estado;
        preinscipcion_correcta.fechaPreInscripcion = this.fechaPreInscripcion;
        preinscipcion_correcta.evento = this.evento.id;
        preinscipcion_correcta.participante = this.participante;
        return preinscipcion_correcta;
    }
}

