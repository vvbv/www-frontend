import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Noticia } from '../../modelos/noticias.class';
import { NoticiasService } from 'app/servicios/noticias.service';

@Component({
  selector: 'app-form-noticia',
  templateUrl: './form-noticia.component.html',
  styleUrls: ['./form-noticia.component.scss']
})
export class FormNoticiaComponent implements OnInit {
  @Input() public noticia: Noticia;
  @Input() public noticiaForm ;
  @Input() public errores: JSON;
  editar: boolean;
  constructor( noticiaService: NoticiasService) {
    this.noticia = new Noticia();
    this.errores =  JSON.parse('{}');

   }

   fileChange($event) {
    console.log($event.target.files);
    this.noticia.imagen = $event.target.files[0];
 }

   ngOnInit() {
     if (this.noticia.resumen !== '') {
       this.editar = true;
     }
   }

}
