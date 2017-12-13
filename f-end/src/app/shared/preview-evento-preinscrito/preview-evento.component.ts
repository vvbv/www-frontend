import { Component, OnInit, Input } from '@angular/core';
import { UsuarioService } from '../../servicios/usuario.service';
import { Usuario } from '../../modelos/usuario.class';
import { Evento } from '../../modelos/evento.class';
import { EventoEstructura } from '../../modelos/eventoEstructura.class';
import { EventoService } from '../../servicios/events.service';
import { PreinscripcionConEvento } from '../../modelos/preInscripcionConEvento.class';
@Component({
  selector: 'app-preview-evento-preinscripcion',
  templateUrl: './preview-evento.component.html',
  styleUrls: ['./preview-evento.component.scss']
})
export class PreviewEventoPreinscripcionComponent implements OnInit {
  @Input() public preinscripcionConEvento: PreinscripcionConEvento;
  public usuarioLogueado$: Promise<Usuario>;
  estructuraEvento: EventoEstructura;
  constructor(private usuarioService: UsuarioService,  private eventService: EventoService) {
            //  this.eventService.getEvento(2).subscribe(data => { this.event = data});
            this.eventService.getOpciones().subscribe(
              response => {
                this.estructuraEvento = response['actions']['POST'];
                console.log(this.estructuraEvento.estado.choices);
              }
            );
          
          this.usuarioLogueado$ = this.usuarioService.obtenerUsuarioActualCache();  

   }
  getDisplayNameEstado(evento: Evento): any {
    var  est:JSON = (this.estructuraEvento.estado.choices.filter( choice => choice.value === evento.estado));
    return est['0'].display_name;
   }
  ngOnInit() {
  }

}
