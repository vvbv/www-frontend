import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Noticia } from '../../modelos/noticias.class';
import { Usuario } from '../../modelos/usuario.class';
import { Observable } from 'rxjs/Observable';
import { NoticiasService } from '../../servicios/noticias.service';
import { UsuarioService } from '../../servicios/usuario.service';
@Component({
  selector: 'app-listar-noticias-layout',
  templateUrl: './listar-noticias-layout.component.html',
  styleUrls: ['./listar-noticias-layout.component.scss']
})
export class ListarNoticiasLayoutComponent implements OnInit {
  public noticias$: Promise<Noticia[]|JSON>;
  public usuario: Usuario;
  
  
  constructor(private noticiaService : NoticiasService, private usuarioService: UsuarioService) {
    

  }

  ngOnInit() {
    this.noticias$ =   this.noticiaService.getNoticias();
    this.usuarioService.recuperarUsuario()
    .then(response => this.usuario = response)
    .catch(response => console.log(response));
  }

}
