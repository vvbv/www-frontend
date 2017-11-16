import { Component } from '@angular/core';
import { Usuario } from '../../../modelos/usuario.class';
import { UsuarioService } from '../../../servicios/usuario.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
    

    isActive = false;
    showMenu = '';
    public usuario$: Promise<Usuario>;
    
    constructor(private usuariosService: UsuarioService) {
        this.usuario$ = this.usuariosService.recuperarUsuario();
    }
    
    
    eventCalled() {
        this.isActive = !this.isActive;
    }
    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }
    onSwipeLeft() {
        console.log('swipleft');
    }
}
