import { TokenService } from './token.service';
import { Injectable } from '@angular/core';
import { ConeccionInfo } from './coneccion.info';
@Injectable()
export class InjectorToken {
    constructor (private tokenService: TokenService, private coneccionInfo: ConeccionInfo) {

    }

    inyectarTokenConeccionInfo() {
        if (localStorage.getItem('tok')) {
            if ( this.tokenService.isValid(localStorage.getItem('tok')) ) {
               this.coneccionInfo.setToken(localStorage.getItem('tok')) ;
            }
        }
    }
}

