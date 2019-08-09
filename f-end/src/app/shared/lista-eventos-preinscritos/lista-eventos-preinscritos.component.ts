import { Component, OnInit, Input } from '@angular/core';
import { Evento } from '../../modelos/evento.class';
import { routerTransition } from '../../router.animations';
import { PreinscripcionConEvento } from '../../modelos/preInscripcionConEvento.class';


@Component({
  selector: 'app-lista-eventos-preinscritos',
  templateUrl: './lista-eventos-preinscritos.component.html',
  styleUrls: ['./lista-eventos-preinscritos.component.scss'],
  animations: [routerTransition()]
})
export class ListaEventosPreinscritosComponent implements OnInit {
  @Input() public preinscripcionesConEvento: Array<PreinscripcionConEvento>;
  constructor(
  ) {
   }

  ngOnInit() {
  }

}
