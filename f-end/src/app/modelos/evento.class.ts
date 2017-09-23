import { EventoInterface } from './evento.interface';

export class Evento implements EventoInterface {
    public nombre: string;
    public descripcion: string;
    public fechaInicio: string;
    public fechaFinalizacion: string;
    public estado: string;

    constructor() {
        this.nombre = '';
        this.descripcion = '';
        this.fechaFinalizacion = '';
        this.fechaInicio = '';
        this.estado = '';
    }
}
