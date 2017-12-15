import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import { UsuarioService } from '../../servicios/usuario.service';
import { Usuario } from '../../modelos/usuario.class';
import { Evento } from '../../modelos/evento.class';
import { EventoEstructura } from '../../modelos/eventoEstructura.class';
import { EventoService } from '../../servicios/events.service';
import { PreinscripcionConEvento } from '../../modelos/preInscripcionConEvento.class';
import { PreInscripcionEstructura } from 'app/modelos/preInscripcionEstructura';
import { PreInscripcionService } from 'app/servicios/preInscripcion.service';
import { ToastsManager } from 'ng2-toastr/src/toast-manager';
import { esconderSlideToLeft } from '../../router.animations';


@Component({
  selector: 'app-preview-evento-preinscripcion',
  templateUrl: './preview-evento.component.html',
  styleUrls: ['./preview-evento.component.scss'],
  animations: [esconderSlideToLeft()]
})
export class PreviewEventoPreinscripcionComponent implements OnInit {
  @Input() public preinscripcionConEvento: PreinscripcionConEvento;
  public usuarioLogueado$: Promise<Usuario>;
  public preinscripcionCancelada: boolean;
  public estructuraPreinscripcion$: Promise<PreInscripcionEstructura>;
  estructuraEvento: EventoEstructura;
  constructor(private usuarioService: UsuarioService,
    private eventService: EventoService,
    private preinscripcionService: PreInscripcionService,
    viewContainerRef: ViewContainerRef,
    private _toastr : ToastsManager,
  ) {
    this._toastr.setRootViewContainerRef(viewContainerRef);
    this.estructuraPreinscripcion$ = this.preinscripcionService.getOpciones();
    //  this.eventService.getEvento(2).subscribe(data => { this.event = data});
    this.eventService.getOpciones().subscribe(
      response => {
        this.estructuraEvento = response['actions']['POST'];
        console.log(this.estructuraEvento.estado.choices);

      }
    );
    this.preinscripcionCancelada = false;
    this.usuarioLogueado$ = this.usuarioService.obtenerUsuarioActualCache();

  }

  getDisplayNameEstadoPreinscripcion(preinscripcion: PreinscripcionConEvento, estructura: PreInscripcionEstructura): string {
    const est: JSON = (estructura.estado.choices.filter(choice => choice.value === preinscripcion.estado));
    return est['0'].display_name;
  }
  cancelarPreinscripcion(preinscripcionConEvento: PreinscripcionConEvento): void {
    this.preinscripcionService.cancelarPreinscripcion(preinscripcionConEvento)
      .then(response => {
        this.preinscripcionCancelada = true;
        this._toastr.warning('Ha cancelado su preinscripcion al evento "' + preinscripcionConEvento.evento.nombre + '"',
        'Se ha echo!', {toastLife: 5000, showCloseButton: true}); 
      }).catch(response => console.log(response));

  }
  getDisplayNameEstado(evento: Evento): any {
    var est: JSON = (this.estructuraEvento.estado.choices.filter(choice => choice.value === evento.estado));
    return est['0'].display_name;
  }
  ngOnInit() {
  }

}
