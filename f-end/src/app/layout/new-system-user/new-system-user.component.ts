import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ActivatedRoute, Params, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UsuarioService } from '../../servicios/usuario.service';
import { Usuario } from '../../modelos/usuario.class';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-profile',
    templateUrl: './new-system-user.component.html',
    styleUrls: ['./new-system-user.component.scss'],
    animations: [routerTransition()]
})
export class NewSystemUserComponent implements OnInit {
    estructuraUsuario: JSON;
    private usuarioLogueado: Usuario;
    roles: JSON;
    usuarioNuevo: Usuario;
    retornoRegistro: Usuario|JSON;
    rol: string;

    constructor(private usuarioService: UsuarioService) {
        this.usuarioNuevo = new Usuario();
        this.usuarioNuevo.rol = 'AD';
        this.retornoRegistro = new Usuario();

        this.usuarioService.recuperarUsuario()
            .then(
                response => {
                    this.usuarioLogueado = response;
                }
            );
        this.usuarioService.getEstructuraUsuario()
            .then(
                  response => {
                    this.estructuraUsuario = response;
                    this.roles = this.estructuraUsuario['rol']['choices'];     
                 }
            );
    }

    /*Esto sigue sin funcionar*/
    registrarUSuario(): void{
        this.usuarioNuevo.rol = this.rol;
        this.usuarioNuevo.estadoHabilitado = 'true';
        this.usuarioNuevo.imagenPerfil = null;
        console.log(JSON.stringify(this.usuarioNuevo));
        this.usuarioService.crearUsuario(this.usuarioNuevo).then(
            response => {
                this.retornoRegistro = response;
                if((this.retornoRegistro.nombres == this.usuarioNuevo.nombres)&&(this.retornoRegistro.nombres != null)){
                    console.log("Usuario registrado");
                    this.usuarioNuevo = new Usuario();
                    this.retornoRegistro = new Usuario();
                }else{
                    this.retornoRegistro;
                };
            }
        );
    }

    actualizarRol(): void{
        console.log(this.rol);
    }

    ngOnInit() {
    }
}
