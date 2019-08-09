import { Evento } from './evento.class';
import { Usuario } from './usuario.class';
import { ActividadInterface } from './actividad.interface';
export class ActividadEstructura implements ActividadInterface {
    id: any;
    fechaCreacion: any;
    nombre: any;
    descripcion: any;
    fechaInicio: any;
    fechaFinalizacion: any;
    evento: any;
    asistentes: any;


}
