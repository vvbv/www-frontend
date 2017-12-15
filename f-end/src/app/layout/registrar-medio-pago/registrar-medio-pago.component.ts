import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { UsuarioService } from '../../servicios/usuario.service';
import { Evento } from '../../modelos/evento.class';
import { Usuario } from '../../modelos/usuario.class';
import { routerTransition } from '../../router.animations';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { MedioDePago } from 'app/modelos/medio-pago.class';
import { MediosPagoService } from '../../servicios/medios-pago.service';
@Component({
  selector: 'app-registrar-medio-pago',
  templateUrl: './registrar-medio-pago.component.html',
  styleUrls: ['./registrar-medio-pago.component.scss'],
  animations: [routerTransition()]
})
export class RegistrarMedioPagoComponent implements OnInit {
  eventos$: Promise<Evento[]>;
  medioDePago: MedioDePago;
  respuesta: JSON;
  solo_lectura: boolean;
  usuarioLogueado$: Promise<Usuario>;
  constructor(
    private usuarioService: UsuarioService,
    private mediosPagoService: MediosPagoService,
    private _toastr: ToastsManager,
    vRef: ViewContainerRef,

  ) {
    this.medioDePago = new MedioDePago();
    this.solo_lectura = false;
    this._toastr.setRootViewContainerRef(vRef);
    this.usuarioLogueado$ = this.usuarioService.obtenerUsuarioActualCache()
    this.usuarioService.obtenerUsuarioActualCache()
      .then(
      response => {
        this.mediosPagoService.getMedioPagoPorUserName(response.username)
          .then(response => {
            console.log(response);
            if (response) {
              this.solo_lectura = true; 
              
              this.medioDePago = response;
            }
          })
          .catch(response => { this.medioDePago = new MedioDePago(); console.log(response) })
      }
      ).catch(response => this.medioDePago = new MedioDePago());

    this.respuesta = null;

  }
  actalizarMedioPago(usuario: Usuario, medioPago: MedioDePago): void {
    medioPago.usuario = usuario.username;
    this.usuarioService.registrarMedioPago(medioPago)
      .then(response => {
        this.respuesta = response;
        if (this.respuesta['codigo'] === 1) {
          this._toastr.success(this.respuesta['mensaje'] + ',' + ' se ha registrado su cuenta', 'En hora buena!', { toastLife: 3000, showCloseButton: true });

        }
        else {
          this._toastr.error(this.respuesta['mensaje'], 'Error!', { toastLife: 3000, showCloseButton: true });
          this.medioDePago.clave = '';
        }

      }
      ).catch();
  }
  ngOnInit() {
  }

}
