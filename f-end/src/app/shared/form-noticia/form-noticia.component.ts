import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Noticia } from '../../modelos/noticias.class';
import { NoticiasService } from 'app/servicios/noticias.service';
import { UsuarioService } from 'app/servicios/usuario.service';
@Component({
  selector: 'app-form-noticia',
  templateUrl: './form-noticia.component.html',
  styleUrls: ['./form-noticia.component.scss']
})
export class FormNoticiaComponent implements OnInit {
  @Input() public noticia: Noticia;
  @Input() public noticiaForm ;
  @Input() contenido: string;
  @Input() public errores: JSON;
  public idEditor: string;
  editar: boolean;
  constructor( noticiaService: NoticiasService, private usuarioService: UsuarioService) {
    this.noticia = new Noticia();
    this.usuarioService.recuperarUsuario().
    then(res => this.noticia.usuarioRegistra = res.id)
    .catch(res => console.log(res));
    this.errores =  JSON.parse('{}');
    this.idEditor = (Math.floor(Math.random() * 600000) + 1).toString();
   }

   fileChange($event) {
    console.log($event.target.files);
    this.noticia.imagen = $event.target.files[0];
 }
 keyupHandlerFunction(e): void {
     this.noticia.contenido = e;
}
    
   ngOnInit() {
       
   }

}
