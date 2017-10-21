import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ActivatedRoute, Params, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UsuarioService } from '../../servicios/usuario.service';
import { Usuario } from '../../modelos/usuario.class';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
    animations: [routerTransition()]
})
export class ProfileComponent implements OnInit {
    private usuarioLogueado: Usuario;
    public username: string;
    public nombres: string;
    public apellidos: string;
    public email: string;
    public urlImagen: string;

    constructor(private usuarioService: UsuarioService) {
        
        this.usuarioService.recuperarUsuario()
            .then(
                response => {
                    this.usuarioLogueado = response;
                    this.username = this.usuarioLogueado.username;
                    this.nombres = this.usuarioLogueado.nombres;
                    this.apellidos = this.usuarioLogueado.apellidos;
                    this.email = this.usuarioLogueado.email;
                    this.usuarioService.getImagenPerfil(this.usuarioLogueado.imagenPerfil)
                        .then(
                            response => {
                                this.urlImagen = response;
                            }
                        )
                }
            );
        
    }

    ngOnInit() {
    }
}
