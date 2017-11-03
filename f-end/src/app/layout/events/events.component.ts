import { EventoService } from '../../servicios/events.service';
import { Component, OnInit,  ViewContainerRef} from '@angular/core';
import { NgClass } from '@angular/common';
import { routerTransition } from '../../router.animations';

import {FormControl} from '@angular/forms';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import 'hammerjs';

import { Evento } from '../../modelos/evento.class';
import { EventoEstructura } from '../../modelos/eventoEstructura.class';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { JsonFormatter } from 'tslint/lib/formatters';

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.scss'],
    animations: [routerTransition()]
})

export class EventsComponent  {
    event: Evento;
    eventos: Evento[];
    errores: JSON;
    submitted = false;
    eventoCreado = false;
    opcionesEvento: JSON;
    estructuraEvento: EventoEstructura;
    constructor(
      private eventService: EventoService,
      private _toastr: ToastsManager,
      vRef: ViewContainerRef,
    ) {
      this._toastr.setRootViewContainerRef(vRef);
      this.event = new Evento();

      this.errores =  JSON.parse('{}');

    //  this.eventService.getEvento(2).subscribe(data => { this.event = data});
        this.eventService.getOpciones().subscribe(
          response => {
            this.opcionesEvento = response;
            this.estructuraEvento = this.opcionesEvento['actions']['POST'];
            console.log(this.estructuraEvento.estado.choices);
          }
        );
    }

   newEvent() {
     this.eventService.crearEvento(this.event).
     then(res => {
      if ((res as Evento).nombre === this.event.nombre) {
        this.eventoCreado = true;
        this.event = new Evento();
        this.errores =  JSON.parse('{}');
        this._toastr.success('Se ha registrado el evento correctamente', 'En hora buena!', {toastLife: 3000, showCloseButton: false});
      } else {
        this._toastr.warning('No se ha podido ejecutar la acción ', 'Error!', {toastLife: 3000, showCloseButton: false});
        this.errores = res as JSON;
      }
     }
    )
     .catch(
       response => {
         console.log(response);
       } );
    }



  }


