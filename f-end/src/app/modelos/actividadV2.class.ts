import { Evento } from './evento.class';
import { Usuario } from './usuario.class';
import { ActividadV2Interface } from './actividadV2.interface';

/* Clase alternativa, para el no uso de 
    asistentes: Usuario[]; */
export class ActividadV2 implements ActividadV2Interface {

    id: number;
    fechaCreacion: string;
    nombre: string;
    descripcion: string;
    fechaInicio: string;
    fechaFinalizacion: string;
    evento: string;

    constructor() {
        this.fechaCreacion = null;
        this.nombre = '';
        this.descripcion = '';
        this.fechaInicio = '';
        this.fechaFinalizacion = '';
        this.evento = "";
    }
}
