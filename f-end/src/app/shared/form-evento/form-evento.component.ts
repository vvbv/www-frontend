import { EventoService } from '../../servicios/events.service';
import { MensajesToastService } from '../../servicios/mensajes-toast.service';
import { Component, OnInit, Input,  ViewContainerRef} from '@angular/core';
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
  selector: 'app-form-evento',
  templateUrl: './form-evento.component.html',
  styleUrls: ['./form-evento.component.scss']
})

export class FormEventoComponent implements OnInit {
  @Input() public event: Evento;
  @Input() public errores: JSON;
  opcionesEvento: JSON;
  estructuraEvento: EventoEstructura;
  editar: boolean;
  constructor(
    private eventService: EventoService,
  ) {

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
    ngOnInit() {
      if (this.event.nombre !== '') {
        this.editar = true;
      }
    }
  }








