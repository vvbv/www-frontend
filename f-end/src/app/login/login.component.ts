import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';


import { Coneccion } from '../servicios/coneccion.info';
import { User } from '../eventos/user';
@Component({
    
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    model: User;
    
    constructor(public router: Router, private authenticationService:Coneccion) {
        this.model = new User();
        this.authenticationService.init( 'http://localhost:8000/api/' , 'auth-jwt', '', '' ,'eventos', 'eventos/');
    }

    ngOnInit() {
    }

    onLoggedin() {
        this.authenticationService.obtenerToken(this.model.username, this.model.password).then(
            response => localStorage.getItem('tok') )
        .catch(this.printError);
    }
    printError(){
        console.log("error de logueo");
    }

}
