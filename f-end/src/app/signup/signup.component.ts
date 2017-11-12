import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { routerTransition } from '../router.animations';
import { Usuario } from '../modelos/usuario.class';
import { UsuarioService } from '../servicios/usuario.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { FormControl } from '@angular/forms';
@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    usuario: Usuario;
    errorRetorno: JSON;
    constructor(private _toastr: ToastsManager,
                vRef: ViewContainerRef,
                private  usuariosService: UsuarioService ) {
        this._toastr.setRootViewContainerRef(vRef);
        this.usuario = new Usuario();
        this.errorRetorno = JSON.parse('{}');
    }
    crearUsuario(usuario: Usuario) {
        this.usuariosService.crearUsuario(usuario)
        .then(response =>  {
            if (this.usuario.nombres === response.nombres && (response.nombres != null)) {
                this._toastr.success
                    ('Usuario "' + this.usuario.username +
                    '" registrado correctamente, valla a login para iniciar sesión', 'En hora buena!',
                    {toastLife: 12000, showCloseButton: false});
                    this.errorRetorno = JSON.parse('{}');
                    this.usuario = new Usuario();
            } else {
                this.errorRetorno = JSON.parse(JSON.stringify(response));
                console.log(this.errorRetorno);

                this._toastr.error('Error registrando el nuevo usuario', 'Ups!', {toastLife: 3000, showCloseButton: false});
            }

        }
        )
        .catch(response => { console.log(response); });
    }
    ngOnInit() { }
}
