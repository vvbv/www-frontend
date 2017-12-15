import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { AuthenticationService } from '../servicios/authentication.service';
import { UsuarioService } from '../servicios/usuario.service';
import { Usuario } from '../modelos/usuario.class';
import { NavigationExtras } from '@angular/router';
import { DashboardComponent } from '../layout/dashboard/dashboard.component';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    model: Usuario;
    usuario: Usuario;
    constructor(
        private _toastr: ToastsManager,
        vRef: ViewContainerRef,
            public router: Router,
            private authenticationService: AuthenticationService,
            private usuarioService: UsuarioService,
            public activeRoute: ActivatedRoute
        ) {

            this._toastr.setRootViewContainerRef(vRef);
            this.model = new Usuario();

            
    }
    printError() {
        console.log('error de logueo');

        
        
    }
    ngOnInit() {
        this.activeRoute.queryParams.subscribe(
            params => {
                console.log(params['logout'] + 'asdsad');
                if(params['logout'] == "yes"){
                    console.log(params['logout'] + 'asdsad');
                    this.logout();
                }
            }
         );
    }

    logout(){
        this.authenticationService.logout();
        this._toastr.info('Ha salido correctamente.', 'Información!', {toastLife: 3000, showCloseButton: false});
    }

    onLoggedin() {
        
        this.authenticationService.obtenerYAlmacenarToken(this.model.username, this.model.password).then(
                response => {
                    this.usuarioService.getUsuario(this.model.username).then(
                        res => {
                            this.usuario = res;
                            this.usuarioService.almacenarUsuario(this.usuario.username);
                            /*let navigationExtras: NavigationExtras = {
                                queryParamsHandling: 'preserve',
                                queryParams: { 'password': this.usuario.password }
                            };*/
                            //console.log("SALIDA" + JSON.stringify(navigationExtras));
                            //this.router.navigate(['dashboard'], navigationExtras);
                            this.router.navigate(['dashboard']);
                        }
                    );
                }
            )
        .catch(res => {
            
            this._toastr.error('Datos invalidos', 'Error!', {toastLife: 3000, showCloseButton: false});
        });
    }


}
