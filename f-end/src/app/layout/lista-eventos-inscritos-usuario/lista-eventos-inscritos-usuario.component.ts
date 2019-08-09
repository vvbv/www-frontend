import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../..//servicios/usuario.service';
import { EventoService } from '../../servicios/events.service';
import { Evento } from '../../modelos/evento.class';
import { Usuario } from '../../modelos/usuario.class';
import { routerTransition } from '../../router.animations';
import { PreinscripcionConEvento } from '../../modelos/preInscripcionConEvento.class';
import { PreInscripcionService } from '../../servicios/preInscripcion.service';
import { InscripcionService } from '../../servicios/inscripcion.service';
import { InscripcionConEvento } from '../../modelos/inscripcionConEvento.class';
@Component({
  selector: 'app-lista-eventos-inscritos-usuario',
  templateUrl: './lista-eventos-inscritos-usuario.component.html',
  styleUrls: ['./lista-eventos-inscritos-usuario.component.scss'],
  animations : [routerTransition()]
})
export class ListaEventosInscritosUsuarioComponent implements OnInit {
  inscripcionesConEvento$: Promise<InscripcionConEvento[]>;
  usuarioLogueado: Usuario;
  constructor(
    private usuarioService: UsuarioService,
    private inscripcionSerice: InscripcionService
  ) { 
    
    this.usuarioService.obtenerUsuarioActualCache()
    .then(response => {
      this.usuarioLogueado = response;
      this.inscripcionesConEvento$ = this.inscripcionSerice.
        getInscripcionesConEvento(this.usuarioLogueado);
    });
   
    


  }

  ngOnInit() {
  }

}
