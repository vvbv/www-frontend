export class EstadisticasEventos{
    cantidadEventosTerminados: number;
    cantidadEventosSinIniciar: number;
    cantidadEventosCancelados: number;
    cantidadEventosEnCurso: number;

    constructor(){
        this.cantidadEventosCancelados = 0;
        this.cantidadEventosEnCurso = 0;
        this.cantidadEventosSinIniciar = 0;
        this.cantidadEventosTerminados = 0;
    }
}