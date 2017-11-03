import { Usuario } from './usuario.class';
export interface EventoInterface {
    id: any;
    nombre: any;
    descripcion: any;
    fechaInicio: any;
    fechaFinalizacion: any;
    estado: any;
    precio: any;
    usuariosPreinscritos: Usuario[];
}
