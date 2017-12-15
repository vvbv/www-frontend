import { Component, OnInit, ViewEncapsulation, ViewContainerRef } from '@angular/core';
import { Actividad } from '../../modelos/actividad.class';
import { Observable } from 'rxjs/Observable';
import { ActividadService } from '../../servicios/actividad.service';
import { routerTransition } from '../../router.animations';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ActivatedRoute, Params, Route } from '@angular/router';

@Component({
  selector: 'app-list-activities-layout',
  templateUrl: './list-activities-layout.component.html',
  styleUrls: ['./list-activities-layout.component.scss'],
  animations: [routerTransition()]
})
export class ListActivitiesLayoutComponent implements OnInit {
  public actividades: Actividad[];
  vRef: ViewContainerRef;
  constructor(public actividadService: ActividadService, public activeRoute: ActivatedRoute) {
      this.activeRoute.queryParams.subscribe(
        params => {
          this.cargarActividades(Number(params['id']));
        }
    );
      
  }

    private cargarActividades(id: number) {
        var evento = id;
        console.log(evento);
        this.actividadService.getActividadesByEvent(evento).then(response => {
            this.actividades = response;
        });
    }

  ngOnInit() {
  }

}
