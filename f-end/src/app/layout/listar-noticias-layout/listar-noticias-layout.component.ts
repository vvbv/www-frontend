import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Noticia } from '../../modelos/noticias.class';
import { Usuario } from '../../modelos/usuario.class';

 
@Component({
  selector: 'app-listar-noticias-layout',
  templateUrl: './listar-noticias-layout.component.html',
  styleUrls: ['./listar-noticias-layout.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListarNoticiasLayoutComponent implements OnInit {
  noticias: Noticia[];
  constructor() { }

  ngOnInit() {
  }

}
