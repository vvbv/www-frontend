import { Component, OnInit, Input } from '@angular/core';
import { UsuarioService } from '../../servicios/usuario.service';
import { Usuario } from '../../modelos/usuario.class';
import { Evento } from '../../modelos/evento.class';
import { EventoEstructura } from '../../modelos/eventoEstructura.class';
import { EventoService } from '../../servicios/events.service';
import { InscripcionConEvento } from 'app/modelos/inscripcionConEvento.class';
import { InscripcionEstructura } from 'app/modelos/inscripcionEstructura.class';
import { InscripcionService } from '../../servicios/inscripcion.service';


@Component({
  selector: 'app-preview-evento-inscripcion',
  templateUrl: './preview-evento.component.html',
  styleUrls: ['./preview-evento.component.scss']
})
export class PreviewEventoInscripcionComponent implements OnInit {
  @Input() public inscripcionConEvento: InscripcionConEvento;
  public usuarioLogueado$: Promise<Usuario>;
  public estructuraInscripcion$: Promise<InscripcionEstructura>;
  estructuraEvento: EventoEstructura;
  constructor(private usuarioService: UsuarioService, 
     private eventService: EventoService,
     private inscripcionService: InscripcionService
    ) {
    this.estructuraInscripcion$ = this.inscripcionService.getOpciones();
            //  this.eventService.getEvento(2).subscribe(data => { this.event = data});
            this.eventService.getOpciones().subscribe(
              response => {
                this.estructuraEvento = response['actions']['POST'];
                console.log(this.estructuraEvento.estado.choices);

              }
            );
          
          this.usuarioLogueado$ = this.usuarioService.obtenerUsuarioActualCache();  

   }

   aceptarInscripcion(inscripcion: InscripcionConEvento): void {
     this.inscripcionService.aceptarInscripcionPorUsuario(inscripcion)
     .then()
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
