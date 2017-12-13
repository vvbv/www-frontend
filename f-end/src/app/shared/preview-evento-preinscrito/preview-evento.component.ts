import { Component, OnInit, Input } from '@angular/core';
import { UsuarioService } from '../../servicios/usuario.service';
import { Usuario } from '../../modelos/usuario.class';
import { Evento } from '../../modelos/evento.class';
import { EventoEstructura } from '../../modelos/eventoEstructura.class';
import { EventoService } from '../../servicios/events.service';
import { PreinscripcionConEvento } from '../../modelos/preInscripcionConEvento.class';
import { PreInscripcionEstructura } from 'app/modelos/preInscripcionEstructura';
import { PreInscripcionService } from 'app/servicios/preInscripcion.service';


@Component({
  selector: 'app-preview-evento-preinscripcion',
  templateUrl: './preview-evento.component.html',
  styleUrls: ['./preview-evento.component.scss']
})
export class PreviewEventoPreinscripcionComponent implements OnInit {
  @Input() public preinscripcionConEvento: PreinscripcionConEvento;
  public usuarioLogueado$: Promise<Usuario>;
  public estructuraPreinscripcion$: Promise<PreInscripcionEstructura>;
  estructuraEvento: EventoEstructura;
  constructor(private usuarioService: UsuarioService, 
     private eventService: EventoService,
     private preinscripcionService: PreInscripcionService
    ) {
    this.estructuraPreinscripcion$ = this.preinscripcionService.getOpciones();
            //  this.eventService.getEvento(2).subscribe(data => { this.event = data});
            this.eventService.getOpciones().subscribe(
              response => {
                this.estructuraEvento = response['actions']['POST'];
                console.log(this.estructuraEvento.estado.choices);

              }
            );
          
          this.usuarioLogueado$ = this.usuarioService.obtenerUsuarioActualCache();  

   }

  getDisplayNameEstadoPreinscripcion(preinscripcion: PreinscripcionConEvento, estructura: PreInscripcionEstructura): string {
    const  est: JSON = (estructura.estado.choices.filter( choice => choice.value === preinscripcion.estado));
    return est['0'].display_name;
  }
  getDisplayNameEstado(evento: Evento): any {
    var  est:JSON = (this.estructuraEvento.estado.choices.filter( choice => choice.value === evento.estado));
    return est['0'].display_name;
   }
  ngOnInit() { 
  }

}
