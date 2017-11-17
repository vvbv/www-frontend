import { Component, OnInit, ViewEncapsulation, ViewContainerRef } from '@angular/core';
import { Actividad } from '../../modelos/actividad.class';
import { Observable } from 'rxjs/Observable';
import { ActividadService } from '../../servicios/actividad.service';
import { routerTransition } from '../../router.animations';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-list-activities-layout',
  templateUrl: './list-activities-layout.component.html',
  styleUrls: ['./list-activities-layout.component.scss'],
  animations: [routerTransition()]
})
export class ListActivitiesLayoutComponent implements OnInit {
  public actividades: Actividad[];
  vRef: ViewContainerRef;
  constructor(public actividadService: ActividadService) {
      this.cargarActividades();
      
  }

    private cargarActividades() {
        var evento: number = 1;
        console.log(evento);
        this.actividadService.getActividadesByEvent(evento).then(response => {
            this.actividades = response;
            console.log(JSON.stringify(response));
        });
    }

  ngOnInit() {
  }

}
