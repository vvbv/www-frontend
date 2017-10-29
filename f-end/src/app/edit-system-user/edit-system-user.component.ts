import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { ActivatedRoute, Params, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UsuarioService } from '../servicios/usuario.service';
import { Usuario } from '../modelos/usuario.class';
import { FormControl } from '@angular/forms';
import { HttpParams } from '@angular/common/http';

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

  constructor(private usuarioService: UsuarioService, public activeRoute: ActivatedRoute) {
      
  }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe(
        params => {
          this.usuarioService.getUsuario(params['username']).then(
            response => {
              this.usuarioEditar = response;
              this.usuarioInicial = response;
              this.usuarioService.getImagenPerfil(this.usuarioEditar.imagenPerfil)
                              .then(
                                  response => {
                                      this.urlImagen = response;
                                  }
                              );
            }
          )
        }
     );
  }

  public actualizarInformacionPerfil(){
      if (this.usuarioEditar != this.usuarioInicial) {
        this.usuarioService.actualizarUsuario(this.usuarioEditar).then(
              response => {
                  console.log("Información de usuario actualizada!");
              }
          );
      }else{
        console.log("No se ha presentado ninguna modificación al usuario!");
      }
        
    }

}
