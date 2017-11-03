import { EventoInterface } from './evento.interface';
import { Usuario } from './usuario.class';
export class Evento implements EventoInterface {
    public id: string;
    public nombre: string;
    public descripcion: string;
    public fechaInicio: string;
    public fechaFinalizacion: string;
    public estado: string;
    public precio: number;
    public usuariosPreinscritos: Usuario[];
    constructor() {
        this.id = '';
        this.nombre = '';
        this.descripcion = '';
        this.fechaFinalizacion = '';
        this.fechaInicio = '';
        this.estado = '';
        this.precio = 0;
        this.usuariosPreinscritos = new Array<Usuario>();
    }
}
