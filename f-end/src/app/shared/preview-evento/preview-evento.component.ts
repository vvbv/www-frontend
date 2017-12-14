import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import { UsuarioService } from '../../servicios/usuario.service';
import { Usuario } from '../../modelos/usuario.class';
import { Evento } from '../../modelos/evento.class';
import { EventoEstructura } from '../../modelos/eventoEstructura.class';
import { EventoService } from '../../servicios/events.service';
import { PreInscripcion } from '../../modelos/preInscripcion.class';
import { PreInscripcionService } from 'app/servicios/preInscripcion.service';
import { SendEmailService } from 'app/servicios/sendEmail.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { viewClassName } from '@angular/compiler';
@Component({
  selector: 'app-preview-evento',
  templateUrl: './preview-evento.component.html',
  styleUrls: ['./preview-evento.component.scss']
})
export class PreviewEventoComponent implements OnInit {
  @Input() public evento: Evento;
  public preinscrito: boolean;
  
  public usuarioLogueado$: Promise<Usuario>;
  estructuraEvento: EventoEstructura;
  constructor(private usuarioService: UsuarioService,  
              private eventService: EventoService,
              viewContainerRef: ViewContainerRef,
              private _toastr : ToastsManager,
              private preInscripcionService: PreInscripcionService,
              private sendEmailService: SendEmailService) {
                this.preinscrito = false;
                this._toastr.setRootViewContainerRef(viewContainerRef);
                this.eventService.getOpciones().subscribe(
                response => {
                  this.estructuraEvento = response['actions']['POST'];
                  console.log(this.estructuraEvento.estado.choices);
                }
            );
          
          this.usuarioLogueado$ = this.usuarioService.obtenerUsuarioActualCache();  

   }
   preinscripcion(evento: Evento, usuarioLogueado: Usuario): void {
    let preinscripcionNueva = new PreInscripcion();
    preinscripcionNueva.evento = evento.id;
    preinscripcionNueva.participante = usuarioLogueado.id;
    preinscripcionNueva.estado = 'EA';
    this.preInscripcionService.registrarPreInscripcion(preinscripcionNueva).then(
      response => {
        console.log(response);
        if(!response['non_field_errors']){
            let jsonEmail = JSON.parse('{"html": "true","subject": "Notificación de Preinscripción a evento","to": "'+usuarioLogueado.custom_email+'","message": "Gracias por su preinscripción e interés en nuestros eventos, se acaba de preinscribir para: <strong>' + evento.nombre + '</strong>. Att: IEDB"}');
            console.log(this._toastr);
            this._toastr.success('Se ha preinscrito al evento ' + evento.nombre,
            'En hora buena!', {toastLife: 5000, showCloseButton: true});         
            this.sendEmailService.sendEmail(jsonEmail);
            this.preinscrito = true;
        }
        
        else{
          this._toastr.warning('Ya esta preinscrito en este evento', 'Advertencia!', {toastLife: 3000, showCloseButton: true});
        }
      }
    ).catch(response => { 
        console.log(response);
    });
  }
  getDisplayNameEstado(evento: Evento): any {
    var  est:JSON = (this.estructuraEvento.estado.choices.filter( choice => choice.value === evento.estado));
    return est['0'].display_name;
   }
  ngOnInit() {
  }

}
