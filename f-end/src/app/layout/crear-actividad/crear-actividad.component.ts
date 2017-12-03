import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Params, Route } from '@angular/router';
import { FormControl } from '@angular/forms';

import { Actividad } from '../../modelos/actividad.class';
import { ActividadV2 } from '../../modelos/actividadV2.class';
import { Evento } from '../../modelos/evento.class';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ActividadService } from '../../servicios/actividad.service';
import { ConeccionInfo } from '../../servicios/coneccion.info';
import { routerTransition } from '../../router.animations';
import { EventoService} from '../../servicios/events.service';


@Component({
  selector: 'app-crear-actividad',
  templateUrl: './crear-actividad.component.html',
  styleUrls: ['./crear-actividad.component.scss'],
  animations: [routerTransition()]
})
export class CrearActividadComponent  {
  
  actividadNueva: ActividadV2;
  actividadError: ActividadV2;
  evento: Evento;

  constructor(
    public _toastr: ToastsManager,
    private actividadService: ActividadService,
    public eventoService: EventoService,
    public activeRoute: ActivatedRoute,
    public coneccionInfo: ConeccionInfo,
    vRef: ViewContainerRef
  ) {
    this._toastr.setRootViewContainerRef(vRef);
    this.actividadNueva = new ActividadV2();
    this.actividadError = new ActividadV2();
    this.evento = new Evento();

    this.activeRoute.queryParams.subscribe(
      params => {
        this.eventoService.getEventov2(params['idEvent']).then(
          response => {
            this.evento = response;
            this.actividadNueva.evento = this.coneccionInfo.url_eventos + this.evento.id + "/";
          }
        )
      }
   );
  }

 crearActividad() {
   console.log(this.actividadNueva);
  this.actividadService.crearActividadV2(this.actividadNueva).then(
    response => {
      if(response['id'] != undefined){
        this._toastr.success('Actividad registrada.', 'En hora buena!', {toastLife: 3000, showCloseButton: false});
      }else{
        this.actividadError = JSON.parse(JSON.stringify(response)) as ActividadV2;
        this._toastr.error('Verifica la información ingresada.', 'Ups!', {toastLife: 3000, showCloseButton: false});
      }
    }
  )
 }

}
