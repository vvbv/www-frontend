import { Evento } from './evento.class';
import { Usuario } from './usuario.class';
export interface ActividadInterface {
    id: any;
    fechaCreacion: any;
    nombre: any;
    descripcion: any;
    fechaInicio: any;
    fechaFinalizacion: any;
    evento: any;
    asistentes: any[];
}
