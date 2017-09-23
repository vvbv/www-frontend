import { EventoService } from '../../servicios/events.service';
import { Component, OnInit,  } from '@angular/core';
import { NgClass } from '@angular/common';
import { routerTransition } from '../../router.animations';

import {FormControl} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import 'hammerjs';
import { Evento } from '../../modelos/evento.class';
import { JsonFormatter } from 'tslint/lib/formatters';
import { Response } from '@angular/http';
@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.scss'],
    animations: [routerTransition()]
})
export class EventsComponent  {
    event: Evento;
    errores: JSON;
    submitted = false;
    constructor(private eventService: EventoService) {
      this.event = new Evento();
      this.event.descripcion = 'Se celebrara mañana';
      this.event.estado = 'Finalizado';
      this.event.nombre = 'Dia de las madres';
      this.errores =  JSON.parse('{}');
    }


   newEvent() {
     this.eventService.crearEvento(this.event).
     then(res => {
      if (res instanceof Evento) {

      } else {
        this.errores = res;
        console.log(this.errores);
      }
     }
    )
     .catch(
       response => {
       } );
    }



  }


