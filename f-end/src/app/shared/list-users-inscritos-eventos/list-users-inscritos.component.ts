import { InscripcionEstructura } from '../../modelos/inscripcionEstructura.class';
import { PreInscripcion } from '../../modelos/preInscripcion.class';
import { Inscripcion } from '../../modelos/inscripcion.class';
import { SendEmailService } from '../../servicios/sendEmail.service';
import { EventoService } from '../../servicios/events.service';
import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ActivatedRoute, Params, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UsuarioService } from '../../servicios/usuario.service';
import { PreInscripcionService } from '../../servicios/preInscripcion.service';
import { InscripcionService } from '../../servicios/inscripcion.service';
import { Usuario } from '../../modelos/usuario.class';
import { Evento } from '../../modelos/evento.class';
import { FormControl } from '@angular/forms';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { InscripcionConUsuario } from 'app/modelos/inscripcionConUsuario.class';
@Component({
    selector: 'app-listUsers-inscritos',
    templateUrl: './list-users-inscritos.component.html',
    styleUrls: ['./list-users-inscritos.component.scss'],
    animations: [routerTransition()]
})
export class listUsersInscritosComponent implements OnInit {
    private usuarioLogueado$: Promise<Usuario>;
    public usuarios: Usuario[];
    public estructuraInscripcion$: Promise<InscripcionEstructura>;
    @Input() public evento: Evento;
    public inscripcionesConUsuario$: Promise<InscripcionConUsuario[]>;
    public filtro;

    constructor(
            private usuarioService: UsuarioService,
            private _toastr: ToastsManager,
            vRef: ViewContainerRef,
            private preInscripcionService: PreInscripcionService,
            private usuairosService: UsuarioService,
            private inscripcionService: InscripcionService,
            private sendEmailService: SendEmailService,
            public eventoService: EventoService
        ) {
        this._toastr.setRootViewContainerRef(vRef); 
        this.inscripcionesConUsuario$ = null;
        this.usuarioLogueado$ = this.usuairosService.obtenerUsuarioActualCache();
        this.estructuraInscripcion$ = this.inscripcionService.getOpciones();
    }
    obtenerUsuariosInscritos$(): string {
        this.inscripcionesConUsuario$ = null;
        this.inscripcionesConUsuario$ = this.inscripcionService.getInscripcionesPorEventoConUsuario(this.evento);
        return '<!-- -->';
    }
    ngOnInit() {
        this.obtenerUsuariosInscritos$();
    }
    getDisplayNameEstadoInscripcion(inscripcion: Inscripcion, estructura): any {
        const  est: JSON = (estructura.estado.choices.filter( choice => choice.value === inscripcion.estado));
        return est['0'].display_name;
    }
    rechazarInscripcion(inscripcionConUsuario: InscripcionConUsuario): void {
        let inscripcion = new Inscripcion();
        inscripcion.init(
            inscripcionConUsuario.id,
            inscripcionConUsuario.evento,
            inscripcionConUsuario.estado,
            inscripcionConUsuario.fechaRegistro,
            inscripcionConUsuario.participante.id,
            inscripcionConUsuario.fechaModificacion,

        );
        this.inscripcionService.rechazarInscripcion(inscripcion)
            .then(res => {
                inscripcionConUsuario.estado = 'R';
                this.eventoService.getEventov2(Number(inscripcion.evento)).then(
                    response => {
                        let mensaje_json = JSON.parse('{"to": "'+inscripcionConUsuario.participante.custom_email+'", "html": "true","message": "Estado inscripcion","subject": "<h1>IEDB</h1><br>Su inscripcion al '+response.nombre+' se ha rechazado."}');
                        this.sendEmailService.sendEmail(mensaje_json);
                    }
                );
                this._toastr.warning('Se ha rechazado una inscripción',
                 'Accion realizada', {toastLife: 3000, showCloseButton: false});
            })
            .catch(res => {
                console.log(res.text().toString());
                this._toastr.error('No se ha podido rechazar la inscripción',
                'Error!', {toastLife: 3000, showCloseButton: false});
            });
        

    }
    aceptarInscripcion(inscripcionConUsuario: InscripcionConUsuario): void {
        let inscripcion = new Inscripcion();
        inscripcion.init(
            inscripcionConUsuario.id,
            inscripcionConUsuario.evento,
            inscripcionConUsuario.estado,
            inscripcionConUsuario.fechaRegistro,
            inscripcionConUsuario.participante.id,
            inscripcionConUsuario.fechaModificacion,

        );
        this.inscripcionService.aceptarInscripcion(inscripcion)
                .then(res => {
                    inscripcionConUsuario.estado = 'A';
                    this.eventoService.getEventov2(Number(inscripcion.evento)).then(
                        response => {
                            let mensaje_json = JSON.parse('{"to": "'+inscripcionConUsuario.participante.custom_email+'", "html": "true","message": "Estado inscripcion","subject": "<h1>IEDB</h1><br>Su inscripcion al '+response.nombre+' se ha aceptado."}');
                            this.sendEmailService.sendEmail(mensaje_json);
                        }
                    );
                    this._toastr.success('El usuario ha sido inscrito al evento',
                     'En hora buena!', {toastLife: 3000, showCloseButton: false});
                })
                .catch(res => {
                    console.log(res.text().toString());
                    this._toastr.error('No se ha podido realizar la inscripción',
                    'Error!', {toastLife: 3000, showCloseButton: false});
                });

    }
}
