import { Injectable } from '@angular/core';
import { ConeccionInfo } from './coneccion.info';
import { AuthenticationService } from './authentication.service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Imagen } from '../modelos/imagen.class';

@Injectable()
export class ImagenesService {

    constructor(private http: Http, private coneccionInfo: ConeccionInfo ) {};
    public getImagen(idImagen: number): Promise<Imagen> {
        return this.http
        .get(this.coneccionInfo.url_imagenes + idImagen, {headers: this.coneccionInfo.headers})
        .toPromise()
        .then(
            response =>  {
                return (JSON.parse(response.text().toString()).results as Imagen);
            }
        );
    }

    public crearImagen(imagen: Imagen): Promise<Imagen|JSON> {
        return this.http
        .post(this.coneccionInfo.url_imagenes_crear, JSON.stringify(imagen), {headers: this.coneccionInfo.headers})
        .toPromise()
        .then(
            response =>  {
                return (JSON.parse(response.text().toString()) as Imagen);
            }
        ).catch(
            response => {
                return  (JSON.parse(response.text().toString()));
            }
        );
    }
    public editarImagen(imagen: Imagen): Promise<Imagen|JSON> {
        return this.http
        .put(this.coneccionInfo.url_imagenes_modificar + imagen.id + '/', JSON.stringify(imagen), {headers: this.coneccionInfo.headers})
        .toPromise()
        .then(
            response =>  {
                return (JSON.parse(response.text().toString()) as Imagen);
            }
        ).catch(
            response => {
                return  (JSON.parse(response.text().toString()));
            }
        );
    }

}
