import { AsistenciaInterface } from './asistencia.interface';
export class Asistencia implements AsistenciaInterface {
    id: number;
    participante: string;
    actividad: string;
    fechaModificacion: string;
    fechaRegistro: string;

    constructor() {
        this.id = null;
        this.participante = '';
        this.actividad = '';
        this.fechaModificacion = '';
        this.fechaRegistro = '';
    }
}
