import { SendEmailService } from '../../servicios/sendEmail.service';

import { EventoService } from '../../servicios/events.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
    
    public usuariosYRegistros: [Usuario, PreInscripcion][];
    public usuariosYRegistrosInscritos: [Usuario, Inscripcion][];
    constructor(
        private eventService: EventoService,
        public sendEmailService: SendEmailService,
        public _toastr: ToastsManager,
        public router: Router,
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
            response => {
            if (response !== null) {
                for (const inscripcion of response as Inscripcion[]){
                    this.usuarioService.getUsuarioById(inscripcion.participante as number)
                    .then(respo => {
                        const usuario: Usuario = respo;
                                        this.inscripcionService.getInscripcionByUserAndEvent(
                usuario, evento
            ).then(res => {
                this.usuariosYRegistrosInscritos = new Array<[Usuario, Inscripcion]>();
                    this.usuariosYRegistrosInscritos.push([usuario,  res])
            })
            .catch(res => {
                console.log(res);
            });
                            })
                    .catch(res => console.log(response));
                }
            }
           if ((response as Inscripcion[]).length === 0) {
                this.usuariosYRegistrosInscritos = new Array<[Usuario, Inscripcion]>();
            }
            }
            )
            .catch();

    }
    
     construirUsuariosPreInscritos (evento: Evento): void {
       this.usuariosYRegistros = null;
        let preInscripciones: PreInscripcion[];
        this.preInscripcionService.getPreInscripcionesPorEvento(evento)
        .then(
            response=>{
            if(response!==null){        
                for(let preInscripcion of response as PreInscripcion[]){
                    
                    this.usuarioService.getUsuarioById(preInscripcion.participante as number)
                    .then(resp => {
                        const usuario: Usuario = resp;
                                        this.preInscripcionService.getPreInscripcionByUserAndEvent(
                usuario, evento
            ).then(res => {
                 this.usuariosYRegistros = new Array<[Usuario, PreInscripcion]>();
                    this.usuariosYRegistros.push([usuario,  res]);
            })
            .catch(res => {
            });
                    })
                    .catch(resp => console.log(resp));
                }

            }
            if((response as PreInscripcion[]).length == 0){
                this.usuariosYRegistros = new Array<[Usuario, PreInscripcion]>();
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
      this.preinscripcionNueva = new PreInscripcion();
      this.preinscripcionNueva.evento = evento.id;
      this.preinscripcionNueva.participante = this.usuarioLogueado.id;
      this.preinscripcionNueva.estado = 'EA';
      this.preInscripcionService.registrarPreInscripcion(this.preinscripcionNueva).then(
        response => {
          console.log(response);
          this._toastr.success('Se ha registrado para este evento', 'En hora buena!', {toastLife: 3000, showCloseButton: false});
          let jsonEmail = JSON.parse('{"html": "true","subject": "Notificación de Preinscripción a evento","to": "'+this.usuarioLogueado.custom_email+'","message": "Gracias por su preinscripción e interés en nuestros eventos, se acaba de preinscribir para: <strong>' + evento.nombre + '</strong>. Att: IEDB"}');
          this.sendEmailService.sendEmail(jsonEmail);
        }
      ).catch(response => { 
        this._toastr.warning('Usted ya se ha registrado para este evento', 'Advertencia!', {toastLife: 3000, showCloseButton: false});
      });
    }

  }


