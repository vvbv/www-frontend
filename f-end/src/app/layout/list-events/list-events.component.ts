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
import 'tinymce/plugins/emoticons/plugin.js';
import { Evento } from '../../modelos/evento.class';
import { Usuario } from '../../modelos/usuario.class';
import { PreInscripcion } from '../../modelos/preInscripcion.class';
import { EventoEstructura } from '../../modelos/eventoEstructura.class';
import { ToastsManager, Toast } from 'ng2-toastr/ng2-toastr';
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
    usuario$: Promise <Usuario>;
    mensaje: string;
    

    
    constructor(
        private eventService: EventoService,
        public _toastr: ToastsManager,
        private preInscripcionService: PreInscripcionService,
        vRef: ViewContainerRef,
        private usuarioService: UsuarioService) {

          this.usuario$ = usuarioService.recuperarUsuario();
      this.preinscripcionNueva = new PreInscripcion();
      this._toastr.setRootViewContainerRef(vRef);
      this.eventoSeleccionado = new Evento();
      this.errores =  JSON.parse('{}');
      this.eventService.getEventos().then(response => {
          this.eventos = response;
          console.log (response);
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

    eliminarEvento(evento: Evento, index: number) {
      this.eventService.deleteEvent(evento)
      .then(
        response => {
          this._toastr.success('Evento borrado exitosamente', 'Exito!');
          this.eventos.splice(index, 1);
        }
        )
      .catch(
        response => {
          this._toastr.error( response['detail'], 'Error!');
        }
      );
    }
    ngOnInit(){
      
    }
    getDisplayNameEstado(evento: Evento): any {
     var  est:JSON = (this.estructuraEvento.estado.choices.filter( choice => choice.value === evento.estado));
     return est['0'].display_name;
    }
    seleccionarEvento(evento: Evento) {
      this.eventoSeleccionado = evento;
      
    }

    keyupHandlerFunction(e): void {
      console.log(e); //e is the HTML output from your TinyMCE component
    }
    preinscripcion(evento: Evento): void {
      this.preinscripcionNueva.evento = evento.id;
      this.preinscripcionNueva.participante = this.usuarioLogueado.id;
      this.preinscripcionNueva.estado = 'E';
      this.preInscripcionService.registrarPreInscripcion(this.preinscripcionNueva).then(
        response => {
          console.log('que mierda');
          this._toastr.warning('Usted ya se ha registrado para este evento', 'Advertencia!', {toastLife: 3000, showCloseButton: false});
        }
      ).catch(response => {
        this._toastr.warning('Usted ya se ha registrado para este evento', 'Advertencia!', {toastLife: 3000, showCloseButton: false});
      });
    }
  }


