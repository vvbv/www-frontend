import { Component, OnInit, Input } from '@angular/core';
import { Evento } from '../../modelos/evento.class';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-lista-eventos',
  templateUrl: './lista-eventos.component.html',
  styleUrls: ['./lista-eventos.component.scss'],
  animations: [routerTransition()]
})
export class ListaEventosComponent implements OnInit {
  @Input() public eventos: Array<Evento>;
  constructor() { }

  ngOnInit() {
  }

}
