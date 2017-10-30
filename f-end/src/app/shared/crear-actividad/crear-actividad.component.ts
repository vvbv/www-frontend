import { Action } from 'rxjs/scheduler/Action';
import { ActividadService } from '../../servicios/actividad.service';
import { Component, OnInit, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { routerTransition } from '../../router.animations';

import {FormControl} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

import { Actividad } from '../../modelos/actividad.class';
import { ActividadEstructura } from '../../modelos/actividadEstructura.class';

import { JsonFormatter } from 'tslint/lib/formatters';
@Component({
  selector: 'app-crear-actividad',
  templateUrl: './crear-actividad.component.html',
  styleUrls: ['./crear-actividad.component.scss'],
  animations: [routerTransition()]
})
export class CrearActividadComponent implements OnInit {

  actividad: Actividad;
  errores: JSON;
  submitted = false;
  actividadCreada = false;
  estructuraActividad: JSON;
  constructor(private actividadService: ActividadService) {
    this.actividad = new Actividad();

    this.errores =  JSON.parse('{}');

  //  this.eventService.getEvento(2).subscribe(data => { this.event = data});
      this.actividadService.getOpciones().subscribe(
        response => {
          this.estructuraActividad = response;
        }
      );
  }

 nuevaActividad() {
   this.actividadService.crearActividad(this.actividad).
   then(res => {
    if ((res as Actividad).nombre === this.actividad.nombre) {
      this.actividadCreada = true;
      this.actividad = new Actividad();
      this.errores =  JSON.parse('{}');
    } else {
      this.errores = res as JSON;
    }
   }
  )
   .catch(
     response => {
       console.log(response);
     } );
  }


  ngOnInit() {
  }

}
