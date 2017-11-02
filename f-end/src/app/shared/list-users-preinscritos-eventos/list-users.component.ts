import { Component, OnInit, Input } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ActivatedRoute, Params, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UsuarioService } from '../../servicios/usuario.service';
import { PreInscripcionService } from '../../servicios/preInscripcion.service';
import { InscripcionService } from '../../servicios/inscripcion.service';
import { Usuario } from '../../modelos/usuario.class';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-listUsers',
    templateUrl: './list-users.component.html',
    styleUrls: ['./list-users.component.scss'],
    animations: [routerTransition()]
})
export class listUsersComponent implements OnInit {
    private usuarioLogueado: Usuario;
    public usuarios: Usuario[];
    @Input() public usuariosFiltrados: Usuario[];
    public filtro;

    constructor(
            private usuarioService: UsuarioService, 
            private preinscripcionService: PreInscripcionService, 
            private inscripcionService: InscripcionService
        ) {
        this.usuarioService.recuperarUsuario()
            .then(
                response => {
                    this.usuarioLogueado = response;
                }
            );

    }

    ngOnInit() {
    }
    aceptarPreinscripcion(usuario: Usuario): void {
        this.usuariosFiltrados = this.usuariosFiltrados.filter(obj => obj !== usuario);

    }

    filtrar(){
        console.log(this.filtro.indexOf('@'));
        if(this.filtro.indexOf('@') > 0){
            this.usuariosFiltrados = this.usuarios.filter(
                    usuario => usuario.custom_email.indexOf(this.filtro) >= 0
                );
        }else if(this.filtro == ""){
             this.usuariosFiltrados = this.usuarios;
        }else if((this.filtro.indexOf('@') == 0)||(this.filtro.indexOf('@') == -1)){
            var filtro_temporal = this.filtro.replace("@", ""); 
            
            this.usuariosFiltrados = this.usuarios.filter(
                    usuario => usuario.username.indexOf(filtro_temporal) >= 0
                );
            this.usuariosFiltrados = this.usuariosFiltrados.concat( this.usuarios.filter(
                    usuario => usuario.numero_identificacion.indexOf(filtro_temporal) >= 0
                ));
            
        }
        
    }
}
