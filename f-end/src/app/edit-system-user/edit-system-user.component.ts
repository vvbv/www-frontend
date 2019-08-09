import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { routerTransition } from '../router.animations';
import { ActivatedRoute, Params, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UsuarioService } from '../servicios/usuario.service';
import { Usuario } from '../modelos/usuario.class';
import { FormControl } from '@angular/forms';
import { HttpParams } from '@angular/common/http';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-edit-system-user',
  templateUrl: './edit-system-user.component.html',
  styleUrls: ['./edit-system-user.component.css']
})
export class EditSystemUserComponent implements OnInit {
  private usuarioInicial: Usuario;
  usuarioEditar: Usuario;
  urlImagen: string;
  usuarioRetorno: Usuario;
  errorRetorno: JSON;
  private username: string;
  estructuraUsuario: JSON;
  rol: string;
  roles: JSON;

  constructor(private _toastr: ToastsManager, vRef: ViewContainerRef, private usuarioService: UsuarioService, public activeRoute: ActivatedRoute) {
      this._toastr.setRootViewContainerRef(vRef);
      this.usuarioEditar = new Usuario();
      this.urlImagen = "";
      this.errorRetorno = JSON.parse('{}');

      this.activeRoute.queryParams.subscribe(
        params => {
          this.usuarioService.getUsuario(params['username']).then(
            response => {
              this.usuarioEditar = response;
              this.username = this.usuarioEditar.username;
              this.usuarioService.getImagenPerfil(this.usuarioEditar.imagenPerfil)
                              .then(
                                  response => {
                                      this.urlImagen = response;
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
            
          )
        }
     );
  }

  ngOnInit() {
    
  }

  public actualizarInformacionPerfil(){
        this.usuarioEditar.rol = this.rol;
        this.usuarioService.actualizarUsuario(this.usuarioEditar).then(
              response => {

                  if(response['username'] != undefined){
                    console.log(response);
                    this.errorRetorno = JSON.parse('{}');
                    this._toastr.success('Usuario "' + this.username + '" actualizado', 'En hora buena!', {toastLife: 3000, showCloseButton: false});
                  }else{
                    this.errorRetorno = response;
                    console.log(response);
                    this._toastr.error('No se pudo actualizar el usuario', 'Ups!', {toastLife: 3000, showCloseButton: false});
                  }
                  
              });
     
        
    }

    actualizarRol(): void{
        console.log(this.rol);
    }

}
