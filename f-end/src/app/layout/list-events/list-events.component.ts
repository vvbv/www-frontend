import { EventoService } from '../../servicios/events.service';
import { PreInscripcionService } from '../../servicios/preInscripcion.service';
import { InscripcionService } from '../../servicios/inscripcion.service';
import { UsuarioService } from '../../servicios/usuario.service';
import { Component, OnInit , ViewContainerRef  } from '@angular/core';
import { NgClass } from '@angular/common';
import { routerTransition } from '../../router.animations';

import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import 'hammerjs';
import 'tinymce/plugins/emoticons/plugin.js';
import { Evento } from '../../modelos/evento.class';
import { Usuario } from '../../modelos/usuario.class';
import { PreInscripcion } from '../../modelos/preInscripcion.class';
import { Inscripcion } from '../../modelos/inscripcion.class';
import { EventoEstructura } from '../../modelos/eventoEstructura.class';
import { ToastsManager, Toast } from 'ng2-toastr/ng2-toastr';
import { JsonFormatter } from 'tslint/lib/formatters';
import { ConeccionInfo } from '../../servicios/coneccion.info';

@Component({
    selector: 'app-events',
    templateUrl: './list-events.component.html',
    styleUrls: ['./list-events.component.scss'],
    animations: [routerTransition()]
})
export class ListEventsComponent implements OnInit {
    eventos: Evento[];
    eventoSeleccionado: Evento;
    errores: JSON;
    preinscripcionNueva: PreInscripcion;
    private usuarioLogueado: Usuario;
    estructuraEvento: EventoEstructura;
    usuario$: Promise <Usuario>;
    mensaje: string;
    
    public usuariosYRegistros: [Usuario, string][];
    public usuariosYRegistrosInscritos: [Usuario, string][];
    constructor(
        private eventService: EventoService,
        public _toastr: ToastsManager,
        private preInscripcionService: PreInscripcionService,
        private inscripcionService: InscripcionService,
        vRef: ViewContainerRef,
        private usuarioService: UsuarioService) {
        
          this.usuario$ = usuarioService.recuperarUsuario();
      this._toastr.setRootViewContainerRef(vRef);
      this.eventoSeleccionado = new Evento();
      this.errores =  JSON.parse('{}');
      this.eventService.getEventos().then(response => {
          this.eventos = response;
          console.log (response);
        }
      );
      this.usuarioService.recuperarUsuario()
            .then(
                response => {
                    this.usuarioLogueado = response;
                }
            );
            //  this.eventService.getEvento(2).subscribe(data => { this.event = data});
        this.eventService.getOpciones().subscribe(
          response => {
            this.estructuraEvento = response['actions']['POST'];
            console.log(this.estructuraEvento.estado.choices);
          }
        );
       this.usuariosYRegistros = null;
      this.usuariosYRegistrosInscritos = null;
    }

    eliminarEvento(evento: Evento, index: number) {
      this.eventService.deleteEvent(evento)
      .then(
        response => {
          this._toastr.success('Evento borrado exitosamente', 'Exito!');
          this.eventos.splice(index, 1);
        }
        )
      .catch(
        response => {
          this._toastr.error( response['detail'], 'Error!');
        }
      );
    }
    ngOnInit(){
       
    }
    
        construirUsuariosInscritos(evento: Evento): void {
            this.usuariosYRegistros = null;
          
        var inscripciones:Inscripcion[];
        this.inscripcionService.getInscripcionesPorEvento(evento)
        .then(
            response=>{
            if(response!==null){        
                for(let inscripcion of response as Inscripcion[]){
                    this.usuarioService.getUsuarioById(inscripcion.participante as number)
                    .then(response => {
                        var usuario : Usuario = response;
                                        this.inscripcionService.getInscripcionByUserAndEvent(
                usuario, evento
            ).then(response => {
                this.usuariosYRegistrosInscritos = new Array<[Usuario, string]>();
               if (response === null || response.estado === 'R') {
                    this.usuariosYRegistrosInscritos.push([usuario, 'R']);
                }else {
                    this.usuariosYRegistrosInscritos.push([usuario,  response.estado])
                };
            })
            .catch(response => {
            });
                        
                    })
                    .catch(response => console.log(response));
                }
            }
           if((response as Inscripcion[]).length == 0){
                this.usuariosYRegistrosInscritos = new Array<[Usuario, string]>();
            }
            }
            )
            .catch();

    }
    
     construirUsuariosPreInscritos (evento: Evento): void {
       this.usuariosYRegistros = null;
        var preInscripciones: PreInscripcion[];
        this.preInscripcionService.getPreInscripcionesPorEvento(evento)
        .then(
            response=>{
            if(response!==null){        
                for(let preInscripcion of response as PreInscripcion[]){
                    
                    this.usuarioService.getUsuarioById(preInscripcion.participante as number)
                    .then(response => {
                        var usuario : Usuario = response;
                                        this.preInscripcionService.getPreInscripcionByUserAndEvent(
                usuario, evento
            ).then(response => {
                 this.usuariosYRegistros = new Array<[Usuario, string]>();
               if (response === null || response.estado === 'R') {
                    this.usuariosYRegistros.push([usuario, 'R']);
                }else {
                    this.usuariosYRegistros.push([usuario,  response.estado])
                };
            })
            .catch(response => {
            });
                        
                    })
                    .catch(response => console.log(response));
                }

            }
            if((response as PreInscripcion[]).length == 0){
                this.usuariosYRegistros = new Array<[Usuario, string]>();
            }
            }
            )
            .catch();

    }
    getDisplayNameEstado(evento: Evento): any {
     var  est:JSON = (this.estructuraEvento.estado.choices.filter( choice => choice.value === evento.estado));
     return est['0'].display_name;
    }
    seleccionarEvento(evento: Evento) {
      this.eventoSeleccionado = evento;
      
    }

    keyupHandlerFunction(e): void {
      console.log(e); //e is the HTML output from your TinyMCE component
    }
    preinscripcion(evento: Evento): void {
      this.preinscripcionNueva.evento = evento.id;
      this.preinscripcionNueva.participante = this.usuarioLogueado.id;
      this.preinscripcionNueva.estado = 'E';
      this.preInscripcionService.registrarPreInscripcion(this.preinscripcionNueva).then(
        response => {
          console.log('que mierda');
          this._toastr.warning('Usted ya se ha registrado para este evento', 'Advertencia!', {toastLife: 3000, showCloseButton: false});
        }
      ).catch(response => {
        this._toastr.warning('Usted ya se ha registrado para este evento', 'Advertencia!', {toastLife: 3000, showCloseButton: false});
      });
    }
  }


