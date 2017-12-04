import { PreInscripcionInterface } from './preInscripcion.interface';

export class PreInscripcion implements PreInscripcionInterface {
    public id: string;
    public evento: string;
    public participante: any;
    public fechaPreInscripcion: string;
    public estado: string;

    init (id:string, evento: string,
          participante: any, fechaPreinscripcion: string,
          estado: string){
            this.id = id;
            this.evento = evento;
            this.participante = participante;
            this.fechaPreInscripcion = fechaPreinscripcion;
            this.estado = estado;
        }

    constructor() {
        this.id = '';
        this.evento = '';
        this.fechaPreInscripcion = '';
        this.estado = '';
    }
}
