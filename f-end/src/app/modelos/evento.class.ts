import { EventoInterface } from './evento.interface';

export class Evento implements EventoInterface {
    public id: string;
    public nombre: string;
    public descripcion: string;
    public fechaInicio: string;
    public fechaFinalizacion: string;
    public estado: string;

    constructor() {
        this.id = '';
        this.nombre = '';
        this.descripcion = '';
        this.fechaFinalizacion = '';
        this.fechaInicio = '';
        this.estado = '';
    }
}
