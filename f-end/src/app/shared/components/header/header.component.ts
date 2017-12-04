import { AuthenticationService } from '../../../servicios/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd/*, ActivatedRoute*/ } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';
import { UsuarioService } from '../../../servicios/usuario.service';
import { Usuario } from '../../../modelos/usuario.class'; 


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    public username: string;
    public urlImagenPerfil$: Promise<string>;
    private usuarioLogueado$: Promise<Usuario>;
    
    pushRightClass = 'push-right';
    constructor(private translate: TranslateService, public router: Router, private authenticationService: AuthenticationService, private UsuarioService: UsuarioService) {
        this.router.events.subscribe((val) => {
            if (val instanceof NavigationEnd && window.innerWidth <= 992 && this.isToggled()) {
                this.toggleSidebar();
            }
        });

        this.usuarioLogueado$ = this.UsuarioService.obtenerUsuarioActualCache();
        this.urlImagenPerfil$ = this.UsuarioService.obtenerUrlImgenUsuarioActualCache()
        .then(response => {console.log(response); return response});
    }

    ngOnInit() {}
    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }
    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    onLoggedout() {
        this.authenticationService.logout();
    }

    changeLang(language: string) {
        this.translate.use(language);
    }
}
