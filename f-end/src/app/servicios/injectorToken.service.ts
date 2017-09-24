import { TokenService } from './token.service';
import { Injectable } from '@angular/core';
import { ConeccionInfo } from './coneccion.info';
@Injectable()
export class InjectorToken {
    constructor (private tokenService: TokenService, private coneccionInfo: ConeccionInfo) {

    }

    inyectarTokenConeccionInfo() {
        if (localStorage.getItem(this.coneccionInfo.token_name)) {
            this.coneccionInfo.setToken(localStorage.getItem(this.coneccionInfo.token_name)) ;
            this.tokenService.isValid(this.coneccionInfo.token).
            then(res => {
                 if (!res) {
                    this.tokenService.updateToken()
                    .then( resa =>
                     console.log('token actualizado'))
                    .catch(resa =>
                    console.log('no se ha actualizado el token'));
            }
        }
        ).catch();
        }
    }
    }
