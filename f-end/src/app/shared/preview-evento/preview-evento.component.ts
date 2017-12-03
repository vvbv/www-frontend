import { Component, OnInit, Input } from '@angular/core';
import { UsuarioService } from '../../servicios/usuario.service';
import { Usuario } from '../../modelos/usuario.class';
import { Evento } from '../../modelos/evento.class';
@Component({
  selector: 'app-preview-evento',
  templateUrl: './preview-evento.component.html',
  styleUrls: ['./preview-evento.component.scss']
})
export class PreviewEventoComponent implements OnInit {
  @Input() public evento: Evento;
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
  }

}
