import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../..//servicios/usuario.service';
import { EventoService } from '../../servicios/events.service';
import { Evento } from '../../modelos/evento.class';
import { Usuario } from '../../modelos/usuario.class';
import { routerTransition } from '../../router.animations';
import { PreinscripcionConEvento } from '../../modelos/preInscripcionConEvento.class';
import { PreInscripcionService } from '../../servicios/preInscripcion.service';
@Component({
  selector: 'app-lista-eventos-preinscritos-usuario',
  templateUrl: './lista-eventos-preinscritos-usuario.component.html',
  styleUrls: ['./lista-eventos-preinscritos-usuario.component.scss'],
  animations : [routerTransition()]
})
export class ListaEventosPreinscritosUsuarioComponent implements OnInit {
  preinscripcionesConEvento$: Promise<PreinscripcionConEvento[]>;
  usuarioLogueado: Usuario;
  constructor(
    private usuarioService: UsuarioService,
    private preinscripcionService: PreInscripcionService
  ) { 
    
    this.usuarioService.obtenerUsuarioActualCache()
    .then(response => {
      this.usuarioLogueado = response;
      this.preinscripcionesConEvento$ = this.preinscripcionService.
        getPreinscripcionesConEvento(this.usuarioLogueado);
    });
   
    


  }

  ngOnInit() {
  }

}
