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
    usuarioLogueado$: Promise<Usuario>;
    errorUsuario: any;
    usuarioActualizado$: Promise< Usuario>;
    constructor(private _toastr: ToastsManager, vRef: ViewContainerRef, public usuarioService: UsuarioService) {
        this._toastr.setRootViewContainerRef(vRef);
        this.errorUsuario = JSON.parse('{}');
        this.usuarioActualizado$ = this.usuarioService.obtenerUsuarioActualCache();
        this.usuarioLogueado$ = this.usuarioService.obtenerUsuarioActualCache();
        
        
    }

    public getImagenPerfil(usuario: Usuario) {
        this.usuarioService.getImagenPerfil(usuario.imagenPerfil)
        .then(response => {
            return response ;
        });
    }

    public actualizarInformacionPerfil(usuarioActualizado: Usuario){

        this.usuarioService.actualizarMiPerfil(usuarioActualizado).then(
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
