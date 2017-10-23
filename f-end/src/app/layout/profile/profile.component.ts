import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ActivatedRoute, Params, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UsuarioService } from '../../servicios/usuario.service';
import { Usuario } from '../../modelos/usuario.class';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
    animations: [routerTransition()]
})
export class ProfileComponent implements OnInit {
    usuarioLogueado: Usuario;

    public username: string;
    public nombres: string;
    public apellidos: string;
    public custom_email: string;
    public urlImagen: string;
    public nuevaPassword: string;
    public passwordActual: string;

    private usuarioActualizado: Usuario;

    constructor(private usuarioService: UsuarioService) {
        
        this.usuarioService.recuperarUsuario()
            .then(
                response => {
                    this.usuarioLogueado = response;
                    this.usuarioActualizado = this.usuarioLogueado;
                    this.username = this.usuarioLogueado.username;
                    this.nombres = this.usuarioLogueado.nombres;
                    this.apellidos = this.usuarioLogueado.apellidos;
                    this.custom_email = this.usuarioLogueado.custom_email;
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
        /*Falta implementarlo para todos los campos*/
        this.usuarioActualizado.nombres = this.nombres;
        this.usuarioService.actualizarUsuario(this.usuarioActualizado).then(
            response => {
                if(response['username'] == this.usuarioLogueado.username){

                }
            }
        );
    }

    ngOnInit() {
    }
}
