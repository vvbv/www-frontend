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
  public noticiaEditada: boolean;
  public usuario: Usuario;
  errores: JSON;
  constructor(public _toastr: ToastsManager,
    private noticiaService: NoticiasService,
    private route: ActivatedRoute,
    private router: Router,
    private usuariosService: UsuarioService,
    vRef: ViewContainerRef) {
      this._toastr.setRootViewContainerRef(vRef);
       this.errores =  JSON.parse('{}');
          this.noticia$ = this.route.paramMap
   .switchMap((params: ParamMap) =>
            this.noticiaService.getNoticia(Number(params.get('id'))));
    }
    
    
    actualizarNoticia(noticia: Noticia){
      this.noticiaService.actualizarNoticia(noticia)
      .then(      res => {
        if ((res as Noticia).resumen === noticia.resumen) {
          this.noticiaEditada = true;
          if (noticia === (res as Noticia)) {
            this._toastr.warning('No se han registrado cambios', 'Advertencia!', {toastLife: 3000, showCloseButton: false});
          }
          this._toastr.success('Datos actualizados', 'En hora buena!', {toastLife: 3000, showCloseButton: false});
          this.errores =  JSON.parse('{}');
        } else {
          this.errores = res as JSON;
          this._toastr.error('Datos invalidos', 'Error!', {toastLife: 3000, showCloseButton: false});
        }
       }
    ).catch(res => {
      console.log(res);
      this._toastr.error('Datos invalidos', 'Error!', {toastLife: 3000, showCloseButton: false});
    });
    }

  ngOnInit() {
    

    
  }

}
