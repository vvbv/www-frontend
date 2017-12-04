import { Component, OnInit, Input } from '@angular/core';
import { UsuarioService } from '../../servicios/usuario.service';
import { Usuario } from '../../modelos/usuario.class';
import { Evento } from '../../modelos/evento.class';
import { EventoEstructura } from '../../modelos/eventoEstructura.class';
import { EventoService } from '../../servicios/events.service';
@Component({
  selector: 'app-preview-evento',
  templateUrl: './preview-evento.component.html',
  styleUrls: ['./preview-evento.component.scss']
})
export class PreviewEventoComponent implements OnInit {
  @Input() public evento: Evento;
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
