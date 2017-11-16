import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ActivatedRoute, Params, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ActividadService } from '../../servicios/actividad.service';
import { Actividad } from '../../modelos/actividad.class';
import { FormControl } from '@angular/forms';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'app-listActivities',
    templateUrl: './list-activities.component.html',
    styleUrls: ['./list-activities.component.scss'],
    animations: [routerTransition()]
})
export class ListActivitiesComponent implements OnInit {
    @Input() public actividades: Actividad[];
    constructor() {

    }

    ngOnInit() {
    }

    

    
}
