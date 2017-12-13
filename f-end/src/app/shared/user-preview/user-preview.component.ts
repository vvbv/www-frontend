import { Component, OnInit, Input} from '@angular/core';
import { Usuario } from 'app/modelos/usuario.class';


@Component({
  selector: 'app-user-preview',
  templateUrl: './user-preview.component.html',
  styleUrls: ['./user-preview.component.scss']
})
export class UserPreviewComponent implements OnInit {
  @Input() public usuario: Usuario;
  constructor() { }

  ngOnInit() {
   
  }

}
