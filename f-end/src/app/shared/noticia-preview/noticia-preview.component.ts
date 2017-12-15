import { Component, OnInit, Input } from '@angular/core';
import { Noticia } from '../../modelos/noticias.class';

@Component({
  selector: 'app-noticia-preview',
  templateUrl: './noticia-preview.component.html',
  styleUrls: ['./noticia-preview.component.scss']
})
export class NoticiaPreviewComponent implements OnInit {

  constructor() { }
  @Input() public noticia: Noticia; 
  

  ngOnInit() {
  }

}
