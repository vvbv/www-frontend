import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../servicios/noticias.service';
import { Noticia } from '../modelos/noticias.class';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.scss']
})
export class PaginaInicialComponent implements OnInit {
  public noticias: any;
  public sliders: Array<any> = [];
  constructor(public noticiaService: NoticiasService) {
    this.noticiaService.getNoticias().then(
      response => {
        this.noticias = response;
      }
    );
   }

  ngOnInit() {
  }

}
