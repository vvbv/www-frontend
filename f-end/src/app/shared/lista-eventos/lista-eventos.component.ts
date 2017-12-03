import { Component, OnInit, Input } from '@angular/core';
import { Evento } from '../../modelos/evento.class';
@Component({
  selector: 'app-lista-eventos',
  templateUrl: './lista-eventos.component.html',
  styleUrls: ['./lista-eventos.component.scss']
})
export class ListaEventosComponent implements OnInit {
  @Input() eventos: Array<Evento>;
  constructor() { }

  ngOnInit() {
  }

}
