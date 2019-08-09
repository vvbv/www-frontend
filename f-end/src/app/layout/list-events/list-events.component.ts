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
        public router: Router,
        private preInscripcionService: PreInscripcionService,
        public _toastr: ToastsManager,
        vRef: ViewContainerRef,
        private usuarioService: UsuarioService) {
      this.usuarioLogueado$ = usuarioService.obtenerUsuarioActualCache();
      this._toastr.setRootViewContainerRef(vRef);
      this.eventos$ = this.eventService.getEventos();
    }

  
    ngOnInit(){
       
    }
    
   

  }


