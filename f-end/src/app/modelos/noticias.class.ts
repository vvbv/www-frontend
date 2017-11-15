import { NoticiaInterfaz } from './noticias.interface';

export class Noticia implements NoticiaInterfaz {
    id: string;
    titulo: string;
    resumen: string;
    imagen: string;
    contenido: string;
    fechaRegistro: string;
    estado: string;
    fechaModificacion: string;
    usuarioRegistra: string;
    constructor() {
        this.id = '';
        this.titulo = '';
        this.estado = '';
        this.resumen = '';
        this.imagen = '';
        this.contenido = '';
        this.fechaRegistro = '';
        this.usuarioRegistra = '';
        this.fechaModificacion = '';
    }
}
