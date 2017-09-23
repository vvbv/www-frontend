import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';


import { AuthenticationService } from '../servicios/authentication.service';
import { Usuario } from '../modelos/usuario.class';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    model: Usuario;
    constructor(public router: Router, private authenticationService: AuthenticationService) {
        this.model = new Usuario();
    }

    ngOnInit() {
    }

    onLoggedin() {
        this.authenticationService.obtenerToken(this.model.username, this.model.password).then(
            response => {
                localStorage.getItem('tok');
                this.router.navigate(['dashboard']); } )
        .catch(this.printError);
    }
    printError() {
        console.log('error de logueo');
    }

}
