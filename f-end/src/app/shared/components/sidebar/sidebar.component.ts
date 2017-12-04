import { Component } from '@angular/core';
import { Usuario } from '../../../modelos/usuario.class';
import { UsuarioService } from '../../../servicios/usuario.service';
import { slideToBottom } from '../../../router.animations';
@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    animations: [slideToBottom()]
})
export class SidebarComponent {
    

    isActive = false;
    showMenu = '';
    public usuarioLogueado$: Promise<Usuario>;
    
    constructor(private usuariosService: UsuarioService) {
        this.usuarioLogueado$ = this.usuariosService.obtenerUsuarioActualCache();
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
