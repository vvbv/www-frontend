import { Component, OnInit, ViewEncapsulation,  Input } from '@angular/core';
import { Noticia } from '../../modelos/noticias.class';
import { Usuario } from '../../modelos/usuario.class';

@Component({
  selector: 'app-lista-noticias',
  templateUrl: './lista-noticias.component.html',
  styleUrls: ['./lista-noticias.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListaNoticiasComponent implements OnInit {
  @Input() public noticias: Noticia[];
  @Input() public usuario: Usuario;
  constructor() { }

  ngOnInit() {
  }

}
