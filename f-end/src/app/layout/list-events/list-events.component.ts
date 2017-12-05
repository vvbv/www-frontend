import { SendEmailService } from '../../servicios/sendEmail.service';

import { EventoService } from '../../servicios/events.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { PreInscripcionService } from '../../servicios/preInscripcion.service';
import { InscripcionService } from '../../servicios/inscripcion.service';
import { UsuarioService } from '../../servicios/usuario.service';
import { Component, OnInit , ViewContainerRef  } from '@angular/core';
import { NgClass } from '@angular/common';
import { routerTransition } from '../../router.animations';

import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import 'hammerjs';
//import 'ce/plugins/emoticons/plugin.js';
import { Evento } from '../../modelos/evento.class';
import { Usuario } from '../../modelos/usuario.class';
import { PreInscripcion } from '../../modelos/preInscripcion.class';
import { PreInscripcionConUsuario } from '../../modelos/preInscripcionConUsuario.class';
import { Inscripcion } from '../../modelos/inscripcion.class';
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
    eventos$: Promise<Evento[]>;
    preinscripcionNueva: PreInscripcion;
    public usuarioLogueado$: Promise<Usuario>;
    mensaje: string;
    constructor(
        private eventService: EventoService,
        public sendEmailService: SendEmailService,
        public _toastr: ToastsManager,
        public router: Router,
        private preInscripcionService: PreInscripcionService,
        vRef: ViewContainerRef,
        private usuarioService: UsuarioService) {
      this.usuarioLogueado$ = usuarioService.obtenerUsuarioActualCache();
      this._toastr.setRootViewContainerRef(vRef);
      this.eventos$ = this.eventService.getEventos();
    }

  
    ngOnInit(){
       
    }
    
    preinscripcion(evento: Evento, usuarioLogueado: Usuario): void {
      this.preinscripcionNueva = new PreInscripcion();
      this.preinscripcionNueva.evento = evento.id;
      this.preinscripcionNueva.participante = usuarioLogueado.id;
      this.preinscripcionNueva.estado = 'EA';
      this.preInscripcionService.registrarPreInscripcion(this.preinscripcionNueva).then(
        response => {
          console.log(response);
          if(!response['non_field_errors']){
              this._toastr.success('Se ha registrado para este evento', 'En hora buena!', {toastLife: 3000, showCloseButton: true});
              let jsonEmail = JSON.parse('{"html": "true","subject": "Notificación de Preinscripción a evento","to": "'+usuarioLogueado.custom_email+'","message": "Gracias por su preinscripción e interés en nuestros eventos, se acaba de preinscribir para: <strong>' + evento.nombre + '</strong>. Att: IEDB"}');
              this.sendEmailService.sendEmail(jsonEmail);
          }
          
          else{
            this._toastr.warning('Ya esta preinscrito en este evento', 'Advertencia!', {toastLife: 3000, showCloseButton: true});
          }
        }
      ).catch(response => { 
          console.log(response);
      });
    }

  }


