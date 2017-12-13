import { Component, OnInit, Input } from '@angular/core';
import { Evento } from '../../modelos/evento.class';
import { routerTransition } from '../../router.animations';
import { Usuario } from '../../modelos/usuario.class';
import { UsuarioService } from 'app/servicios/usuario.service';

@Component({
  selector: 'app-lista-eventos',
  templateUrl: './lista-eventos.component.html',
  styleUrls: ['./lista-eventos.component.scss'],
  animations: [routerTransition()]
})
export class ListaEventosComponent implements OnInit {
  @Input() public eventos: Array<Evento>;
  public usuarioLogueado$: Promise<Usuario>;
  @Input() public eventosUsuario: boolean;
  constructor(private usuarioService: UsuarioService) { 
    this.eventosUsuario = true;
    this.usuarioLogueado$ = this.usuarioService.obtenerUsuarioActualCache();
  }

  ngOnInit() {
  }

}
