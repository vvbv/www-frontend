import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Params, Route } from '@angular/router';
import { FormControl } from '@angular/forms';

import { Inscripcion } from '../../modelos/inscripcion.class';
import { Usuario } from '../../modelos/usuario.class';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ConeccionInfo } from '../../servicios/coneccion.info';
import { InscripcionService } from '../../servicios/inscripcion.service';
import { UsuarioService } from '../../servicios/usuario.service';
import { EventoService } from '../../servicios/events.service';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-generar-escarapela',
  templateUrl: './generar-escarapela.component.html',
  styleUrls: ['./generar-escarapela.component.scss'],
  animations: [routerTransition()]
})
export class GenerarEscarapelaComponent  {

  inscripciones: Inscripcion[];
  escarapela: any;
  idEvento: any;
  
  constructor(
    public _toastr: ToastsManager,
    public coneccionInfo: ConeccionInfo,
    public inscripcionService: InscripcionService,
    public usuarioService: UsuarioService,
    public eventoService: EventoService,
    vRef: ViewContainerRef
  ) {
    this._toastr.setRootViewContainerRef(vRef);
    this.inscripciones = new Array<Inscripcion>();
    this.escarapela = new Inscripcion();
    this.escarapela.participante = new Usuario();
    this.inscripcionService.getInscripciones().then(
      response => {
        for (let inscripcion of response) {
            if(inscripcion.estado == 'P'){
              this.usuarioService.getUsuarioById(inscripcion.participante).then(
                response => {
                  inscripcion.participante = response;

                  if(response.imagenPerfil != null){
                    this.usuarioService.getImagenPerfil(response.imagenPerfil).then(
                      response2 => {
                        inscripcion.participante.imagenPerfil = response2;
                        this.eventoService.getEventov2(Number(inscripcion.evento)).then(
                          response3 => {
                            inscripcion.evento = response3.nombre;
                            this.idEvento = response3.id;
                            this.inscripciones.push(inscripcion);
                          } 
                        );
                      }
                    );
                  }else{
                    response.imagenPerfil = "";
                    this.eventoService.getEventov2(Number(inscripcion.evento)).then(
                      response3 => {
                        inscripcion.evento = response3.nombre;
                        this.idEvento = response3.id;
                        this.inscripciones.push(inscripcion);
                      } 
                    );
                    
                  }
                }
              );
              
            }
        }
      }
    );
  }

  public establecerEscarapela(inscripcion: any){
    this.escarapela = inscripcion;
  }



}
