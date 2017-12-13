import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from 'app/modelos/usuario.class';

@Component({
  selector: 'app-users-preview',
  templateUrl: './users-preview.component.html',
  styleUrls: ['./users-preview.component.scss']
})
export class UsersPreviewComponent implements OnInit {

  constructor() { }
  @Input() public usuarios: Usuario[];
  ngOnInit() {
    console.log("que pasa men"+ this.usuarios.length);
  }

}
