import { PreInscripcion } from '../../modelos/preInscripcion.class';
import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ActivatedRoute, Params, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SendEmailService } from '../../servicios/sendEmail.service';
import { UsuarioService } from '../../servicios/usuario.service';
import { PreInscripcionService } from '../../servicios/preInscripcion.service';
import { InscripcionService } from '../../servicios/inscripcion.service';
import { Usuario } from '../../modelos/usuario.class';
import { Evento } from '../../modelos/evento.class';
import { FormControl } from '@angular/forms';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { PreInscripcionEstructura } from 'app/modelos/preInscripcionEstructura';
import { PreInscripcionConUsuario } from 'app/modelos/preInscripcionConUsuario.class';
import { EventoService } from '../../servicios/events.service';
@Component({
    selector: 'app-listUsers-preinscritos',
    templateUrl: './list-users.component.html',
    styleUrls: ['./list-users.component.scss'],
    animations: [routerTransition()]
})
export class listUsersComponent implements OnInit {
    private usuarioLogueado$: Promise<Usuario>;
    public usuarios: Usuario[];
    @Input() public evento: Evento;
    public estructuraPreinscripcion$: Promise<PreInscripcionEstructura>;
    public preinscripcionesConUsuario$: Promise<PreInscripcionConUsuario[]>;
    public filtro;
    constructor(
            private usuarioService: UsuarioService,
            private _toastr: ToastsManager,
            vRef: ViewContainerRef,
            private preInscripcionService: PreInscripcionService,
            private preinscripcionService: PreInscripcionService,
            private usuairosService: UsuarioService,
            private inscripcionService: InscripcionService,
            private sendEmailService: SendEmailService,
            public eventoService: EventoService
        ) {
        this._toastr.setRootViewContainerRef(vRef);
        this.usuarioLogueado$ = this.usuarioService.obtenerUsuarioActualCache();
        this.preinscripcionesConUsuario$ = null;
        this.estructuraPreinscripcion$ = this.preinscripcionService.getOpciones();
    }
    getDisplayNameEstado(preinscripcionConUsuario: PreInscripcionConUsuario, estructura): any {
        const  est: JSON = (estructura.estado.choices.filter( choice => choice.value === preinscripcionConUsuario.estado));
        return est['0'].display_name;
    }
    obtenerPreinscripcionesConUsuario$(): string {
        this.preinscripcionesConUsuario$ = null;
        this.preinscripcionesConUsuario$ = this.preinscripcionService.getPreinscripcionesPorEventoConUsuarios(this.evento);
        return '<!-- -->';
    }
    ngOnInit() {
        this.obtenerPreinscripcionesConUsuario$();
    }
    rechazarPreinscripcion(preinscripcionConUsuario: PreInscripcionConUsuario): void {
        const preinscripcion: PreInscripcion = new PreInscripcion();
        preinscripcion.init(
            preinscripcionConUsuario.id,
            preinscripcionConUsuario.evento,
            preinscripcionConUsuario.participante.id,
            preinscripcionConUsuario.fechaPreInscripcion,
            preinscripcionConUsuario.estado
        );
            this.preinscripcionService.rechazarPreinscripcion(preinscripcion)
            .then(res => {
                preinscripcionConUsuario.estado = 'R';
                this.eventoService.getEventov2(Number(preinscripcion.evento)).then(
                    response => {
                        let mensaje_json = JSON.parse('{"to": "'+preinscripcion.participante.custom_email+'", "html": "true","message": "Estado inscripcion","subject": "<h1>IEDB</h1><br>Se ha rechazado una preinscripción a '+response.nombre+'"}');
                        this.sendEmailService.sendEmail(mensaje_json);
                    }
                );
                this._toastr.warning('Se ha rechazado una inscripción',
                 'Accion realizada', {toastLife: 3000, showCloseButton: false});
            })
            .catch(res => {
                console.log(res.text().toString());
                this._toastr.error('Ha ocurrido un error en la acción de rechazo al usuario',
                'No son horas tan buenas!', {toastLife: 3000, showCloseButton: false});
            });
        }


    aceptarPreinscripcion(preinscripcionConUsuario: PreInscripcionConUsuario): void {
        const preinscripcion: PreInscripcion = new PreInscripcion();
        preinscripcion.init(
            preinscripcionConUsuario.id,
            preinscripcionConUsuario.evento,
            preinscripcionConUsuario.participante.id,
            preinscripcionConUsuario.fechaPreInscripcion,
            preinscripcionConUsuario.estado
        );
        this.preinscripcionService.aceptarPreinscripcion(preinscripcion)
                .then(res => {
                    preinscripcionConUsuario.estado = 'A';
                    this.eventoService.getEventov2(Number(preinscripcion.evento)).then(
                        response => {
                            let mensaje_json = JSON.parse('{"to": "'+preinscripcion.participante.custom_email+'", "html": "true","message": "Estado inscripcion","subject": "<h1>IEDB</h1><br>Se ha realizado inscripcion a '+response.nombre+'"}');
                            this.sendEmailService.sendEmail(mensaje_json);
                        }
                    );
                    this._toastr.success('El usuario ha sido inscrito al evento',
                     'En hora buena!', {toastLife: 3000, showCloseButton: false});
                })
                .catch(res => {
                    console.log(res.text().toString());
                    this._toastr.error('No se ha podido realizar la incripción',
                    'Error!', {toastLife: 3000, showCloseButton: false});
                });
            }
}
