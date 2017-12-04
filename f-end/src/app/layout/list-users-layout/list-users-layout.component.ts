import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ActivatedRoute, Params, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UsuarioService } from '../../servicios/usuario.service';
import { Usuario } from '../../modelos/usuario.class';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-listLayoutUsers',
    templateUrl: './list-users-layout.component.html',
    styleUrls: ['./list-users-layout.component.scss'],
    animations: [routerTransition()]
})
export class listUsersLayoutComponent implements OnInit {
    private usuarioLogueado$: Promise<Usuario>;
    public usuarios: Usuario[];
    public usuariosFiltrados: Usuario[];
    public filtro;

    constructor(private usuarioService: UsuarioService) {
       
        this.usuarioLogueado$ = this.usuarioService.obtenerUsuarioActualCache();
       
    }

    ngOnInit() {
        this.usuarioService.getUsuarios().
        then(
            response => {
                this.usuarios = response;
                this.usuariosFiltrados = this.usuarios;
            }
        );
    }
}
