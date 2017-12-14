import { PreInscripcionInterface } from './preInscripcion.interface';
import { Evento } from './evento.class';

export class PreinscripcionConEvento implements PreInscripcionInterface{
    id: any;
    evento: Evento;
    participante: string;
    fechaPreInscripcion: any;
    estado: any;
}