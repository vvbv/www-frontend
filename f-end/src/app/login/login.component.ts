import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { AuthenticationService } from '../servicios/authentication.service';
import { UsuarioService } from '../servicios/usuario.service';
import { Usuario } from '../modelos/usuario.class';
import { NavigationExtras } from '@angular/router';
import { DashboardComponent } from '../layout/dashboard/dashboard.component';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    model: Usuario;
    usuario: Usuario;
    constructor(public router: Router, private authenticationService: AuthenticationService, private usuarioService: UsuarioService) {
        this.model = new Usuario();
    }

    ngOnInit() {
        
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
        .catch(this.printError);
    }
    printError() {
        console.log('error de logueo');
    }

}
