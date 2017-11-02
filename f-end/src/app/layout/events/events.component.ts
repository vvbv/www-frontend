import { EventoService } from '../../servicios/events.service';
import { Component, OnInit,  } from '@angular/core';
import { NgClass } from '@angular/common';
import { routerTransition } from '../../router.animations';

import {FormControl} from '@angular/forms';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import 'hammerjs';

import { Evento } from '../../modelos/evento.class';
import { EventoEstructura } from '../../modelos/eventoEstructura.class';

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
    constructor(private eventService: EventoService) {
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
      } else {
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


