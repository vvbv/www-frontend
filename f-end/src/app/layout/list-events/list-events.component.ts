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
import { EventoEstructura } from '../../modelos/eventoEstructura.class';

import { JsonFormatter } from 'tslint/lib/formatters';
import { ConeccionInfo } from '../../servicios/coneccion.info';

@Component({
    selector: 'app-events',
    templateUrl: './list-events.component.html',
    styleUrls: ['./list-events.component.scss'],
    animations: [routerTransition()]
})
export class ListEventsComponent  {
    eventos: Evento[];
    errores: JSON;
    submitted = false;
    eventoCreado = false;
    opcionesEvento: JSON;
    estructuraEvento: EventoEstructura;
    constructor(private eventService: EventoService) {
      this.eventos =  [];

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
     this.eventService.getEventos().
     then(res => {
      this.eventos = res;
     }
    )
     .catch(
       response => {
         console.log(response);
       } );
    }



  }

