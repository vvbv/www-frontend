import { Component, OnInit, Input } from '@angular/core';
import { Evento } from '../../modelos/evento.class';
import { routerTransition } from '../../router.animations';
import { PreinscripcionConEvento } from '../../modelos/preInscripcionConEvento.class';
import { InscripcionConEvento } from '../../modelos/inscripcionConEvento.class';


@Component({
  selector: 'app-lista-eventos-inscritos',
  templateUrl: './lista-eventos-inscritos.component.html',
  styleUrls: ['./lista-eventos-inscritos.component.scss'],
  animations: [routerTransition()]
})
export class ListaEventosInscritosComponent implements OnInit {
  @Input() public inscripcionesConEvento: Array<InscripcionConEvento>;
  constructor(
  ) {
   }

  ngOnInit() {
  }

}
