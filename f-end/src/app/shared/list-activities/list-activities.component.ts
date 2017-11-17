import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ActivatedRoute, Params, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ActividadService } from '../../servicios/actividad.service';
import { UsuarioService } from '../../servicios/usuario.service';
import { Actividad } from '../../modelos/actividad.class';
import { Usuario } from '../../modelos/usuario.class';
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
    public estadoActividad: boolean[];
    public now: Date = new Date();
    private usuario: Usuario;

    constructor(public usuarioService: UsuarioService, public actividadService: ActividadService, public _toastr: ToastsManager, vRef: ViewContainerRef) {
        this._toastr.setRootViewContainerRef(vRef);
        this.cargarUsuario();
        this.actividades = [];
        
    }

    private cargarUsuario() {
        this.usuarioService.recuperarUsuario()
            .then(response => {
                this.usuario = response;
            });
    }

    ngOnInit() {
        /*for (var key of this.actividades) {
                var fechaFinalizacionActividad = new Date(key.fechaFinalizacion).getTime();
                if(this.now.getTime() < fechaFinalizacionActividad){
                    this.estadoActividad.push(false);
                }else{
                    this.estadoActividad.push(true);
                }
            }*/
    }

    participar(idActividad: string){
        this.actividadService.registrarParticipanteActividad(idActividad, this.usuario.id).then(
            response => {
                console.log("Respuesta " + JSON.stringify(response));
                if(response['non_field_errors'] != null){
                    this._toastr.error('Ya se encuentra como participante de esta actividad.', 'Ups!', {toastLife: 3000, showCloseButton: false});
                }else if(response['id'] != null){
                    this._toastr.success('Registrado como participante de la actividad.', 'En hora buena!', {toastLife: 3000, showCloseButton: false});
                }
            }
        );
        
    }

}
