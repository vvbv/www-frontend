import { PreInscripcion } from '../../modelos/preInscripcion.class';
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
    selector: 'app-listUsers',
    templateUrl: './list-users.component.html',
    styleUrls: ['./list-users.component.scss'],
    animations: [routerTransition()]
})
export class listUsersComponent implements OnInit {
    private usuarioLogueado: Usuario;
    public usuarios: Usuario[];
    @Input() public evento: Evento;
   
    @Input() public usuariosYRegistros: [Usuario, string][];
    
    public filtro;

    constructor(
            private usuarioService: UsuarioService,
            private _toastr: ToastsManager,
            vRef: ViewContainerRef,
            private preInscripcionService: PreInscripcionService,
            private preinscripcionService: PreInscripcionService,
            private usuairosService: UsuarioService,
            private inscripcionService: InscripcionService
        ) {
        this._toastr.setRootViewContainerRef(vRef);
        this.usuarioService.recuperarUsuario()
            .then(
                response => {
                    this.usuarioLogueado = response;
                }
            );
            this.usuariosYRegistros = new Array<[Usuario, string]>();

    }

    ngOnInit() {
    }
   
    rechazarPreinscripcion(usuario: Usuario, evento: Evento): void{
        
        let preinscripcionUsuario = new PreInscripcion();
        this.preInscripcionService.getPreInscripcionByUserAndEvent(
            usuario, evento
        ).then(response => {
            preinscripcionUsuario = response;

            this.preinscripcionService.rechazarPreinscripcion(preinscripcionUsuario)
            .then(res => {
                this.usuariosYRegistros.find(i => i[0] === usuario)[1] = 'R';
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

    aceptarPreinscripcion(usuario: Usuario, evento: Evento): void {
        
        let preinscripcionUsuario = new PreInscripcion();
        this.preInscripcionService.getPreInscripcionByUserAndEvent(
            usuario, evento
        ).then(
            response => {
                preinscripcionUsuario = response;
               
                this.preinscripcionService.aceptarPreinscripcion(preinscripcionUsuario)
                .then(res => {
                    this.usuariosYRegistros.find(i => i[0] === usuario)[1] = 'A';
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
