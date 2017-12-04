import { InscripcionEstructura } from '../../modelos/inscripcionEstructura.class';
import { PreInscripcion } from '../../modelos/preInscripcion.class';
import { Inscripcion } from '../../modelos/inscripcion.class';

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
    @Input() public usuariosYRegistros: [Usuario, Inscripcion][];
    public filtro;

    constructor(
            private usuarioService: UsuarioService,
            private _toastr: ToastsManager,
            vRef: ViewContainerRef,
            private preInscripcionService: PreInscripcionService,
            private usuairosService: UsuarioService,
            private inscripcionService: InscripcionService
        ) {
        this._toastr.setRootViewContainerRef(vRef);
        this.usuarioLogueado$ = this.usuairosService.obtenerUsuarioActualCache();
        this.estructuraInscripcion$ = this.inscripcionService.getOpciones();
    }

    ngOnInit() {
    }
    getDisplayNameEstadoInscripcion(inscripcion: Inscripcion, estructura): any {
        const  est: JSON = (estructura.estado.choices.filter( choice => choice.value === inscripcion.estado));
        return est['0'].display_name;
    }
    rechazarInscripcion(usuario: Usuario, evento: Evento): void {
        let inscripcionUsuario = new Inscripcion();
        this.inscripcionService.getInscripcionByUserAndEvent(
            usuario, evento
        ).then(response => {
            inscripcionUsuario = response;

            this.inscripcionService.rechazarInscripcion(inscripcionUsuario)
            .then(res => {
                this.usuariosYRegistros.find(i => i[0] === usuario)[1].estado = 'R';
                this._toastr.warning('Se ha rechazado una inscripción',
                 'Accion realizada', {toastLife: 3000, showCloseButton: false});
            })
            .catch(res => {
                console.log(res.text().toString());
                this._toastr.error('Ha ocurrido un error en la acción de rechazo al usuario',
                'No son horas tan buenas!', {toastLife: 3000, showCloseButton: false});
            });
        }
    ).catch(response => console.log('Ha ocurrido un error: ' + response));
    }
    aceptarInscripcion(usuario: Usuario, evento: Evento): void {
        let inscripcionUsuario = new Inscripcion();
        this.inscripcionService.getInscripcionByUserAndEvent(
            usuario, evento
        ).then(
            response => {
                inscripcionUsuario = response;
                this.inscripcionService.aceptarInscripcion(inscripcionUsuario)
                .then(res => {
                    this.usuariosYRegistros.find(i => i[0] === usuario)[1].estado = 'A';
                    this._toastr.success('El usuario ha sido inscrito al evento',
                     'En hora buena!', {toastLife: 3000, showCloseButton: false});
                })
                .catch(res => {
                    console.log(res.text().toString());
                    this._toastr.error('Ha ocurrido un error en la incripción',
                    'No son horas tan buenas!', {toastLife: 3000, showCloseButton: false});
                });
            }
        ).catch(response => console.log('Ha ocurrido un error: ' + response));


    }
}
