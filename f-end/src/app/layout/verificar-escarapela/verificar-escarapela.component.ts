import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Params, Route } from '@angular/router';
import { FormControl } from '@angular/forms';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ConeccionInfo } from '../../servicios/coneccion.info';
import { InscripcionService } from '../../servicios/inscripcion.service';
import { UsuarioService } from '../../servicios/usuario.service';
import { EventoService } from '../../servicios/events.service';
import { Inscripcion } from '../../modelos/inscripcion.class';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-verificar-escarapela',
  templateUrl: './verificar-escarapela.component.html',
  styleUrls: ['./verificar-escarapela.component.scss'],
  animations: [routerTransition()]
})
export class VerificarEscarapelaComponent  {
  
  codigoSeguridad: string;

  constructor(
    public _toastr: ToastsManager,
    public coneccionInfo: ConeccionInfo,
    public inscripcionService: InscripcionService,
    public usuarioService: UsuarioService,
    public eventoService: EventoService,
    vRef: ViewContainerRef
  ) {
    this.codigoSeguridad = "";
    this._toastr.setRootViewContainerRef(vRef);
  }

  public verificar(){
    var codigos = this.codigoSeguridad.split("-", 3); 
    if((codigos[0].length > 2)&&(codigos[1].length > 2)&&(codigos[2].length > 2)){
      let idEvento = codigos[0].substr(1).slice(0, -1);
      let idInscripcion = codigos[1].substr(1).slice(0, -1);
      let idUsuario = codigos[2].substr(1).slice(0, -1);
      this.inscripcionService.getInscripcionV2(idInscripcion).then(
        response => {
          if(response != null){
            if((response.estado == 'P')==(response.id == idInscripcion)&&(response.evento == idEvento)&&(response.participante == idUsuario)){
              this._toastr.success('Escarapela válida', 'En hora buena!', {toastLife: 3000, showCloseButton: false});
            }else{
              this._toastr.error('Escarapela inválida', 'Ups!', {toastLife: 3000, showCloseButton: false});
            }
          }else{
            this._toastr.error('Escarapela inválida', 'Ups!', {toastLife: 3000, showCloseButton: false});
          }
        }
      );
    }else{
      this._toastr.error('Escarapela inválida', 'Ups!', {toastLife: 3000, showCloseButton: false});
    }
  }
}
