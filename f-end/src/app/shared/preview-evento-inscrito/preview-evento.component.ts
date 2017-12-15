import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import { UsuarioService } from '../../servicios/usuario.service';
import { Usuario } from '../../modelos/usuario.class';
import { Evento } from '../../modelos/evento.class';
import { EventoEstructura } from '../../modelos/eventoEstructura.class';
import { EventoService } from '../../servicios/events.service';
import { InscripcionConEvento } from 'app/modelos/inscripcionConEvento.class';
import { InscripcionEstructura } from 'app/modelos/inscripcionEstructura.class';
import { InscripcionService } from '../../servicios/inscripcion.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';


@Component({
  selector: 'app-preview-evento-inscripcion',
  templateUrl: './preview-evento.component.html',
  styleUrls: ['./preview-evento.component.scss']
})
export class PreviewEventoInscripcionComponent implements OnInit {
  @Input() public inscripcionConEvento: InscripcionConEvento;
  public usuarioLogueado$: Promise<Usuario>;
  public inscripcionCancelada: boolean;
  public estructuraInscripcion$: Promise<InscripcionEstructura>;
  estructuraEvento: EventoEstructura;
  constructor(private usuarioService: UsuarioService, 
     private eventService: EventoService,
     private _toastr: ToastsManager,
     vref: ViewContainerRef,
     private inscripcionService: InscripcionService
    ) {
      this._toastr.setRootViewContainerRef(vref);
    this.estructuraInscripcion$ = this.inscripcionService.getOpciones();
            //  this.eventService.getEvento(2).subscribe(data => { this.event = data});
            this.eventService.getOpciones().subscribe(
              response => {
                this.estructuraEvento = response['actions']['POST'];
                console.log(this.estructuraEvento.estado.choices);

              }
            );
          this.inscripcionCancelada = false;
          this.usuarioLogueado$ = this.usuarioService.obtenerUsuarioActualCache();  

   }

   aceptarInscripcion(inscripcion: InscripcionConEvento): void {
     this.inscripcionService.aceptarInscripcionPorUsuario(inscripcion)
     .then( response => {
       inscripcion.estado = 'EP';
       this._toastr.success('Ha aceptado la inscripcion al evento "' + inscripcion.evento.nombre + '"',
       'Exito!', {toastLife: 5000, showCloseButton: true}); 
     }
     )
     .catch();
   }


   rechazarInscripcion(inscripcion: InscripcionConEvento): void {
    this.inscripcionService.rechazarInscripcionPorUsuario(inscripcion)
    .then(response => {
      this.inscripcionCancelada = true;
      this._toastr.warning('Ha cancelado inscripcion al evento "' + inscripcion.evento.nombre + '"',
      'Se ha echo!', {toastLife: 5000, showCloseButton: true}); 
    })
    .catch();
  }

  getDisplayNameEstadoInscripcion(inscripcion: InscripcionConEvento, estructura: InscripcionEstructura): string {
    const  est: JSON = (estructura.estado.choices.filter( choice => choice.value === inscripcion.estado));
    return est['0'].display_name;
  }
  getDisplayNameEstado(evento: Evento): any {
    var  est:JSON = (this.estructuraEvento.estado.choices.filter( choice => choice.value === evento.estado));
    return est['0'].display_name;
   }
  ngOnInit() { 
  }

}
