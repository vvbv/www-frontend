import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { UsuarioService } from 'app/servicios/usuario.service';
import { EventoService } from 'app/servicios/events.service';
import { Evento } from '../../modelos/evento.class';
import { Usuario } from '../../modelos/usuario.class';
import { routerTransition } from '../../router.animations';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
@Component({
  selector: 'app-lista-eventos-usuario',
  templateUrl: './lista-eventos-usuario.component.html',
  styleUrls: ['./lista-eventos-usuario.component.scss'],
  animations : [routerTransition()]
})
export class ListaEventosUsuarioComponent implements OnInit {
  eventos$: Promise<Evento[]>;
  usuarioLogueado: Usuario;
  constructor(
    private usuarioService: UsuarioService,
    private eventosService: EventoService,
    private _toastr : ToastsManager,
    vRef: ViewContainerRef,
    
  ) { 
    this.usuarioService.obtenerUsuarioActualCache()
    .then(response => {
      this._toastr.setRootViewContainerRef(vRef);
      this.usuarioLogueado = response;
      this.eventos$ = this.eventosService.getEventosSinSeguimientoPorUsuario(Number(this.usuarioLogueado.id));
    });
   


  }

  ngOnInit() {
  }

}
