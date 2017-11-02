import { Evento } from './evento.class';
import { Usuario } from './usuario.class';
import { ActividadInterface } from './actividad.interface';
export class Actividad implements ActividadInterface {
    id: number;
    fechaCreacion: string;
    nombre: string;
    descripcion: string;
    fechaInicio: string;
    fechaFinalizacion: string;
    evento: number;
    asistentes: Usuario[];

    constructor() {
        this.fechaCreacion = null;
        this.nombre = '';
        this.descripcion = '';
        this.fechaInicio = '';
        this.fechaFinalizacion = '';
        this.evento = -1;
        this.asistentes = new Array<Usuario>();
    }
}
