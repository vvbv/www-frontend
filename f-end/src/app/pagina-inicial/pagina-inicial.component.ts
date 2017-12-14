import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../servicios/noticias.service';
import { Noticia } from '../modelos/noticias.class';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.scss']
})
export class PaginaInicialComponent implements OnInit {
  public cincoUltimasNoticias$: Promise <Noticia[]>;

  constructor(public noticiaService: NoticiasService) {
    this.cincoUltimasNoticias$ = this.noticiaService.getCincoUltimasNoticiasPublicadas();
   }
   
  ngOnInit() {
  }

}
