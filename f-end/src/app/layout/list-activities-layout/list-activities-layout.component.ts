import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Actividad } from '../../modelos/actividad.class';
import { Observable } from 'rxjs/Observable';
import { ActividadService } from '../../servicios/actividad.service';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-list-activities-layout',
  templateUrl: './list-activities-layout.component.html',
  styleUrls: ['./list-activities-layout.component.scss'],
  animations: [routerTransition()]
})
export class ListActivitiesLayoutComponent implements OnInit {
  public actividades: Actividad[];
  constructor(public actividadService: ActividadService) {
      this.cargarActividades();

  }

    private cargarActividades() {
        var evento: number = 1;
        console.log(evento);
        this.actividadService.getActividadesByEvent(evento).then(response => {
            console.log(JSON.stringify(response));
        });
    }

  ngOnInit() {
  }

}
