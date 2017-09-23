import { EventoService } from '../../servicios/events.service';
import { Component, OnInit,  } from '@angular/core';
import { NgClass } from '@angular/common';
import { routerTransition } from '../../router.animations';

import {FormControl} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import '../../eventos/evento';
import 'hammerjs';
import { Event } from '../../eventos/evento';
import { JsonFormatter } from 'tslint/lib/formatters';
import { Response } from '@angular/http';
@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.scss'],
    animations: [routerTransition()]
})
export class EventsComponent  {
    event: Event;
    errores: JSON;
    erroresFechaIncio: any[];
    erroresFechaFinalizacion: any[];
    submitted = false;
    constructor(private eventService: EventoService) {
      this.event = new Event();
      this.event.descripcion = 'Se celebrara mañana';
      this.event.estado = 'Finalizado';
      this.event.nombre = 'Dia de las madres';
    }

    iniciarErrores() {
        this.erroresFechaIncio = this.errores['fechaInicio'];
        this.erroresFechaFinalizacion = this.errores['fechaFinalizacion'];
    }
   newEvent() {
   /* this.eventService.getEventos()
    .then(
      resultados => {
        console.log(resultados.toString());
      }
    )
    .catch();*/
     this.eventService.crearEvento(this.event).
     then()
     .catch(
       response => {
        this.errores = JSON.parse(response.text());
        this.iniciarErrores();
       // console.log(response);

       } );
    }



  }


