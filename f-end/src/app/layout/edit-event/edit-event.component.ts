import { EventoService } from '../../servicios/events.service';
import { Component, OnInit, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { routerTransition } from '../../router.animations';

import {FormControl} from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

import { Evento } from '../../modelos/evento.class';
import { EventoEstructura } from '../../modelos/eventoEstructura.class';

import { JsonFormatter } from 'tslint/lib/formatters';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss'],
  animations: [routerTransition()]
})
export class EditEventComponent  implements OnInit {
  private estructuraEvento: EventoEstructura;
  @Input() idEvento: number;
  private eventoEditado: boolean;
  private evento$: Observable<Evento>;
  private eventoRespuesto: Evento;
  private errores: JSON;
  private opcionesEvento: JSON;
  constructor(
    private eventService: EventoService,
    private route: ActivatedRoute,
    private router: Router) {
          this.errores =  JSON.parse('{}');
            this.eventService.getOpciones().subscribe(
              response => {
                this.opcionesEvento = response;
                this.estructuraEvento = this.opcionesEvento['actions']['POST'];
                console.log(this.estructuraEvento.estado.choices);
              }
            );
            this.evento$ = this.route.paramMap
            .switchMap((params: ParamMap) =>
            this.eventService.getEvento(Number(params.get('id'))));
  }
  actualizarEvento(evento: Evento): void {
    this.eventService.updateEvent(evento).then(
      res => {
        if ((res as Evento).nombre === evento.nombre) {
          this.eventoEditado = true;
          this.errores =  JSON.parse('{}');
        } else {
          this.errores = res as JSON;
        }
       }
    ).catch(res => console.log(res));
  }
  ngOnInit() {

  }


}
