import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.scss'],
  animations: [routerTransition()]
})
export class PaginaInicialComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
