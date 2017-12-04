import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ActivatedRoute, Params, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UsuarioService } from '../../servicios/usuario.service';
import { Usuario } from '../../modelos/usuario.class';
import { FormControl } from '@angular/forms';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'app-listUsers',
    templateUrl: './list-users.component.html',
    styleUrls: ['./list-users.component.scss'],
    animations: [routerTransition()]
})
export class listUsersComponent implements OnInit {
    private usuarioLogueado$: Promise<Usuario>;
    public usuarios: Usuario[];
    @Input() public usuariosFiltrados: Usuario[];
    public filtro;

    constructor(private _toastr: ToastsManager, vRef: ViewContainerRef, private usuarioService: UsuarioService) {
        this._toastr.setRootViewContainerRef(vRef);
        this.usuarioLogueado$ = this.usuarioService.obtenerUsuarioActualCache();
        

    }

    ngOnInit() {
    }

    filtrar($event: any) {
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

    activarUsuario(username: string,  pos:string){
        this.usuarioService.cambiarEstadoUsuario(username, true).then(
            response=>{
                this.usuariosFiltrados[pos] = response;
                console.log(response);
                this._toastr.success('Usuario activado', 'Información!', {toastLife: 3000, showCloseButton: false});
            }
        );
        
    }
    desactivarUsuario(username: string, pos:string){
        this.usuarioService.cambiarEstadoUsuario(username, false).then(
            response=>{
                this.usuariosFiltrados[pos] = response;
                console.log(response);
                this._toastr.warning('Cuenta desactivada', 'Alerta!', {toastLife: 3000, showCloseButton: false});
            }
        );
        
    }
}
