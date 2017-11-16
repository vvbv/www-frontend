import { Component } from '@angular/core';
import { Usuario } from '../../../modelos/usuario.class';
@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
    

    isActive = false;
    showMenu = '';
    private usuario$: Promise<Usuario>;
    
    constructor(private usuariosService: UsuarioService):void {
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
