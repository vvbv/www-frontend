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
    pass_verificacion: string;
    constructor(private _toastr: ToastsManager,
                vRef: ViewContainerRef,
                private  usuariosService: UsuarioService ) {
        this._toastr.setRootViewContainerRef(vRef);
        this.usuario = new Usuario();
        this.pass_verificacion = '';
        this.errorRetorno = JSON.parse('{}');
    }
    crearUsuario(usuario: Usuario) {
        if(this.checkPwd(usuario.password)){
        this.usuariosService.crearUsuario(usuario)
        .then(response =>  {
            if (this.usuario.nombres === response.nombres) {
                this._toastr.success
                    ('Usuario "' + this.usuario.username +
                    '" registrado correctamente, valla a login para iniciar sesión', 'En hora buena!',
                    {toastLife: 12000, showCloseButton: false});
                    this.errorRetorno = JSON.parse('{}');
                    this.pass_verificacion = '';
                    this.usuario = new Usuario();
            } else {
                 if (this.usuario.nombres === response.nombres) {
                   this.errorRetorno = JSON.parse('{}');  
                 }else{
                this.errorRetorno = JSON.parse(JSON.stringify(response));
                
                console.log(this.errorRetorno);
                 }

                this._toastr.error('Error registrando el nuevo usuario', 'Ups!', {toastLife: 3000, showCloseButton: false});
            }

        }
        )
        .catch(response => { console.log(response); });
    }

    }
    keyuppass($event){
        this.errorRetorno['password'] = '';
    }
    checkPwd(str) {
        if (str.length < 6) {
            this.errorRetorno['password'] = 'Contraseña demaciado corta';
            return false;
        } else if (str.length > 50) {
            this.errorRetorno['password'] = 'Contraseña demaciado larga';
            return false;
        } else if (str.search(/\d/) == -1) {
            this.errorRetorno['password'] = 'Ingrese almenos un número';
            return false;
        } else if (str.search(/[a-z]/) == -1) {
            this.errorRetorno['password'] = 'Almenos una letra en minuscula';
            return false;
        } else if (str.search(/[A-Z]/) == -1) {
            this.errorRetorno['password'] = 'Almenos una letra en mayuscula';
            return false;
        } else if (str.search(/[^a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\+\-]/) != -1) {
            this.errorRetorno['password'] = 'Ingrese caracterres válidos';
            return false;
        }
        return true;
    }
    ngOnInit() { }
}
