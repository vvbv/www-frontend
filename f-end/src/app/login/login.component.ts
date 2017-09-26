import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { AuthenticationService } from '../servicios/authentication.service';
import { UsuarioService } from '../servicios/usuario.service';
import { Usuario } from '../modelos/usuario.class';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    model: Usuario;
    usuario:Usuario;
    constructor(public router: Router, private authenticationService: AuthenticationService, private usuarioService: UsuarioService) {
        this.model = new Usuario();
    }

    ngOnInit() {
    }

    onLoggedin() {
        
        this.authenticationService.obtenerYAlmacenarToken(this.model.username, this.model.password).then(
                response => {
                    console.log("USERNAME: " + this.model.username);
                    console.log("PASSWORD: " + this.model.password);
                    this.usuarioService.getUsuario("administrator2").then(
                        res => {
                            this.usuario = res; 
                            console.log(this.usuario.password);
                            console.log(res);
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
