import { Component, OnInit, ViewEncapsulation,  Input } from '@angular/core';
import { Noticia } from '../../modelos/noticias.class';
import { Usuario } from '../../modelos/usuario.class';

@Component({
  selector: 'app-lista-noticias',
  templateUrl: './lista-noticias.component.html',
  styleUrls: ['./lista-noticias.component.scss'],
})
export class ListaNoticiasComponent implements OnInit {
  @Input() public noticias: Noticia[];
  @Input() public usuario: Usuario;
  constructor() { }
  desactivarNoticia(noticia: Noticia){
    alert('en proceso');
  }
  ngOnInit() {
    console.log(this.noticias);
  }

}
