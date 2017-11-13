import { ImagenInterace } from './imagen.interface';

export class Imagen implements ImagenInterace {
    id: string;
    imagen: string;
    fechaHoraRegistro: string;
    constructor() {
        this.id = '-1';
        this.imagen = '';
        this.fechaHoraRegistro = '';
    }
}
