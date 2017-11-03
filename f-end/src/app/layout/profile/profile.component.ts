import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ActivatedRoute, Params, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UsuarioService } from '../../servicios/usuario.service';
import { Usuario } from '../../modelos/usuario.class';
import { FormControl } from '@angular/forms';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
    animations: [routerTransition()]
})
export class ProfileComponent implements OnInit {
    usuarioLogueado: Usuario;
    errorUsuario: any;

    public urlImagen: string;

    usuarioActualizado: Usuario;

    constructor(private _toastr: ToastsManager, vRef: ViewContainerRef, public usuarioService: UsuarioService) {
        this._toastr.setRootViewContainerRef(vRef);
        this.usuarioLogueado = new Usuario();
        this.errorUsuario = JSON.parse('{}');
        this.usuarioActualizado = new Usuario();
        this.usuarioService.recuperarUsuario()
            .then(
                response => {
                    this.usuarioLogueado = response;
                    this.usuarioActualizado = this.usuarioLogueado;
                    this.usuarioService.getImagenPerfil(this.usuarioLogueado.imagenPerfil)
                        .then(
                            response => {
                                this.urlImagen = response;
                            }
                        )
                }
            );
        
    }

    public actualizarInformacionPerfil(){

        this.usuarioService.actualizarMiPerfil(this.usuarioActualizado).then(
            response => {
                if((response != JSON.parse('{}'))&&(response['username'] != undefined)){
                    console.log('Perfil actualizado.');
                    console.log(response);
                    this._toastr.success('Perfil actualizado', 'En hora buena!', {toastLife: 3000, showCloseButton: false});
                }else{
                    console.log('Error actualizando el perfil.');
                    console.log(response);
                    this.errorUsuario = response;
                    this._toastr.error('No se pudo actualizar su perfil', 'Ups!', {toastLife: 3000, showCloseButton: false});
                    
                }
            }
        );
    }

    ngOnInit() {
    }
}
