import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Actividad } from '../../modelos/actividad.class';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ActividadService } from '../../servicios/actividad.service';
import { routerTransition } from '../../router.animations';
import { UsuarioService} from '../../servicios/usuario.service';
@Component({
  selector: 'app-crear-actividad',
  templateUrl: './crear-actividad.component.html',
  styleUrls: ['./crear-actividad.component.scss'],
  animations: [routerTransition()]
})
export class CrearActividadComponent  {
  
  constructor(
    //public _toastr: ToastsManager,
    private actividadService: ActividadService,
    vRef: ViewContainerRef
  ) {

  }

 crearActividad() {
   
 }

}
