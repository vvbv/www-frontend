import { Component, OnInit, ViewEncapsulation, ViewContainerRef } from '@angular/core';
import { Noticia } from '../../modelos/noticias.class';
import { Usuario } from '../../modelos/usuario.class';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { NoticiasService } from '../../servicios/noticias.service';
import { routerTransition } from '../../router.animations';
import { UsuarioService} from '../../servicios/usuario.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Observable} from 'rxjs/Observable';
@Component({
  selector: 'app-editar-noticia',
  templateUrl: './editar-noticia.component.html',
  styleUrls: ['./editar-noticia.component.scss'],
  animations: [routerTransition()],
  encapsulation: ViewEncapsulation.None
})
export class EditarNoticiaComponent implements OnInit {
  public noticia$: Observable<Noticia>;
  
  public usuario: Usuario;
  errores: JSON;
  constructor(public _toastr: ToastsManager,
    private noticiaService: NoticiasService,
    private route: ActivatedRoute,
    private router: Router,
    private usuariosService: UsuarioService,
    vRef: ViewContainerRef) {

       this.errores =  JSON.parse('{}');
          this.noticia$ = this.route.paramMap
   .switchMap((params: ParamMap) =>
            this.noticiaService.getNoticia(Number(params.get('id'))));
    }
    
    
    editarNoticia(noticia: Noticia){
      
    }

  ngOnInit() {
    

    
  }

}
