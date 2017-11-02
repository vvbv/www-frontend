import { EventoService } from '../../servicios/events.service';
import { PreInscripcionService } from '../../servicios/preInscripcion.service';
import { UsuarioService } from '../../servicios/usuario.service';
import { Component, OnInit,  } from '@angular/core';
import { NgClass } from '@angular/common';
import { routerTransition } from '../../router.animations';

import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import 'hammerjs';

import { Evento } from '../../modelos/evento.class';
import { Usuario } from '../../modelos/usuario.class';
import { PreInscripcion } from '../../modelos/preInscripcion.class';
import { EventoEstructura } from '../../modelos/eventoEstructura.class';

import { JsonFormatter } from 'tslint/lib/formatters';
import { ConeccionInfo } from '../../servicios/coneccion.info';

@Component({
    selector: 'app-events',
    templateUrl: './list-events.component.html',
    styleUrls: ['./list-events.component.scss'],
    animations: [routerTransition()]
})
export class ListEventsComponent implements OnInit {
    eventos: Evento[];
    eventoSeleccionado: Evento;
    errores: JSON;
    preinscripcionNueva: PreInscripcion;
    private usuarioLogueado: Usuario;
    mensaje: string;
    constructor(
        private eventService: EventoService,
        private preInscripcionService: PreInscripcionService,
        private usuarioService: UsuarioService) {
      this.preinscripcionNueva = new PreInscripcion();

      this.eventoSeleccionado = new Evento();
      this.errores =  JSON.parse('{}');
      ;
      this.eventService.getEventos().then(response =>
        {this.eventos = response
         console.log(this.eventos);
        }
      );
      this.usuarioService.recuperarUsuario()
            .then(
                response => {
                    this.usuarioLogueado = response;
                }
            );

    }
    ngOnInit() {
     
    }
    seleccionarEvento(evento: Evento) {
      this.eventoSeleccionado = evento;
    }
    preinscripcion(idEvento: any): void {
      this.preinscripcionNueva.evento = idEvento;
      this.preinscripcionNueva.participante = this.usuarioLogueado.id;
      this.preinscripcionNueva.estado = 'E';
      this.preInscripcionService.registrarPreInscripcion(this.preinscripcionNueva).then(
        response => {
          if (typeof response === 'object') {
              this.mensaje = 'Usuario preinscrito correctamente!'
              console.log(this.mensaje);
            }else {
              this.mensaje = 'Ya tiene una preinscripción anterior en este evento!';
              console.log(this.mensaje);
            }
        }
      );
    }
  }


