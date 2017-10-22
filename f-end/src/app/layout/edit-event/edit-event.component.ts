import { EventoService } from '../../servicios/events.service';
import { Component, OnInit, Input } from '@angular/core';
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

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss'],
  animations: [routerTransition()]
})
export class EditEventComponent  {
  estructuraEvento: EventoEstructura;
  @Input() evento: Evento;
  errores: JSON;
  opcionesEvento: JSON;
  constructor(private eventService: EventoService) {
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


}
