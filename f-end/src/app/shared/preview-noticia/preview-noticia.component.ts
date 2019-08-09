import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Noticia } from '../../modelos/noticias.class';
import { Usuario } from '../../modelos/usuario.class';

import { UsuarioService } from 'app/servicios/usuario.service';

@Component({
  selector: 'app-preview-noticia',
  templateUrl: './preview-noticia.component.html',
  styleUrls: ['./preview-noticia.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PreviewNoticiaComponent implements OnInit {
   @Input() public noticia: Noticia;
   @Input() public usuario: Usuario;
  constructor() { }

  ngOnInit() {
  }

}
