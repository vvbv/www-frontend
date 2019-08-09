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
import { EventoService } from '../../servicios/events.service';


@Component({
  selector: 'app-editar-actividad',
  templateUrl: './editar-actividad.component.html',
  styleUrls: ['./editar-actividad.component.scss'],
  animations: [routerTransition()]
})
export class EditarActividadComponent  {
  
  actividad: ActividadV2;
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
    this.actividad = new ActividadV2();
    this.actividadError = new ActividadV2();
    
    this.activeRoute.queryParams.subscribe(
      params => {
        this.actividadService.getActividadPromesaV2(params['idActivity']).then(
          response => {
            this.actividad = response;
          }
        )
      }
    );
  }

  public actualizarActividad(){
    this.actividadService.updateActividadV2(this.actividad).then(
      response => {
        if(response['id'] == undefined){
          this.actividadError = response;
          this._toastr.error('Verifica la información ingresada.', 'Ups!', {toastLife: 3000, showCloseButton: false});
        }else{
          this._toastr.success('Actividad actualizada.', 'En hora buena!', {toastLife: 3000, showCloseButton: false});
        }
      }
    );
  }



}
