import { EventoService } from '../../servicios/events.service';
import { PreInscripcionService } from '../../servicios/preInscripcion.service';
import { UsuarioService } from '../../servicios/usuario.service';
import { Component, OnInit , ViewContainerRef  } from '@angular/core';
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
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
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
    estructuraEvento: EventoEstructura;
    mensaje: string;
    constructor(
        private eventService: EventoService,
        private _toastr: ToastsManager,
        vRef: ViewContainerRef,
        private preInscripcionService: PreInscripcionService,
        private usuarioService: UsuarioService) {
      this.preinscripcionNueva = new PreInscripcion();

      this.eventoSeleccionado = new Evento();
      this.errores =  JSON.parse('{}');
      ;
      this.eventService.getEventos().then(response => {
          this.eventos = response
         console.log(this.eventos);
         this._toastr.setRootViewContainerRef(vRef);
        }
      );
      this.usuarioService.recuperarUsuario()
            .then(
                response => {
                    this.usuarioLogueado = response;
                }
            );
            //  this.eventService.getEvento(2).subscribe(data => { this.event = data});
        this.eventService.getOpciones().subscribe(
          response => {
            this.estructuraEvento = response['actions']['POST'];
            console.log(this.estructuraEvento.estado.choices);
          }
        );

    }
    ngOnInit() {
    }
    getDisplayNameEstado(evento: Evento): any {
     var  est:JSON = (this.estructuraEvento.estado.choices.filter( choice => choice.value === evento.estado));
     return est['0'].display_name;
    }
    seleccionarEvento(evento: Evento) {
      this.eventoSeleccionado = evento;
    }
    preinscripcion(evento: Evento): void {
      this.preinscripcionNueva.evento = evento.id;
      this.preinscripcionNueva.participante = this.usuarioLogueado.id;
      this.preinscripcionNueva.estado = 'E';
      this.preInscripcionService.registrarPreInscripcion(this.preinscripcionNueva).then(
        response => {
          if (typeof response === 'object') {
           let usuario: Usuario = new Usuario();
                this.usuarioService.getUsuario(this.usuarioLogueado.username)
                .then(res => {
                  usuario = res;
                evento.usuariosPreinscritos.push(usuario);
                })
                .catch();
                this._toastr.success('Su incscripcion se ha registrado', 'En hora buena!', {toastLife: 3000, showCloseButton: false});
            }else {
              this._toastr.warning('Usted ya se ha registrado para este evento', 'Advertencia!', {toastLife: 3000, showCloseButton: false});
            }
        }
      );
    }
  }


