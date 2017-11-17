import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Noticia } from '../../modelos/noticias.class';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { NoticiasService } from '../../servicios/noticias.service';
import { routerTransition } from '../../router.animations';
import { UsuarioService} from '../../servicios/usuario.service';
@Component({
  selector: 'app-crear-noticia',
  templateUrl: './crear-noticia.component.html',
  styleUrls: ['./crear-noticia.component.scss'],
  animations: [routerTransition()]
})
export class CrearNoticiaComponent  {
  public noticia: Noticia;
  errores: JSON;
  submitted = false;
  noticiaCreada = false;
  constructor(
    public _toastr: ToastsManager,
    private noticiaService: NoticiasService,
    private usuariosService: UsuarioService,
    vRef: ViewContainerRef
  ) {

    this.noticia = new Noticia();
    this.errores =  JSON.parse('{}');
    this._toastr.setRootViewContainerRef(vRef);
  //  this.eventService.getEvento(2).subscribe(data => { this.event = data});
  }

 nuevaNoticia() {
   console.log(this.noticia.titulo);
   this.noticiaService.crearNoticia(this.noticia).
   then(res => {
     console.log(res);
    if ((res as Noticia).resumen === this.noticia.resumen) {
      this.noticiaCreada = true;
      this.noticia = new Noticia();
      this.errores =  JSON.parse('{}');
      
      this._toastr.success
      ('Se ha registrado la noticia correctamente', 'En hora buena!', {toastLife: 3000, showCloseButton: false});
    } else {
       console.log(res);
      this._toastr.warning
      ('No se ha podido ejecutar la acción ', 'Error!', {toastLife: 3000, showCloseButton: false});
      this.errores = res as JSON;
    }
   }
  )
   .catch(
     response => {
       console.log(response);
     } );
  }


}
