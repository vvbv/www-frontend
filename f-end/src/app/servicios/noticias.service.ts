import { ImagenesService } from './imagenes.service';
import { EventoEstructura } from '../modelos/eventoEstructura.class';
import { ConeccionInfo } from './coneccion.info';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Noticia } from '../modelos/noticias.class';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class NoticiasService {
  constructor( private http: Http,
    imagenesService: ImagenesService, private authenticationService: AuthenticationService, private coneccionInfo: ConeccionInfo ) { }
  public getNoticias(): Promise<Noticia[] | JSON> {
    return this.http
    .get(this.coneccionInfo.url_noticias , {headers: this.coneccionInfo.headers} )
    .toPromise()
    .then(response => {
      return JSON.parse(response.text()) as Noticia[]
    }).catch(response=> {console.log("alv" + response.text().toString());return JSON.parse(response.text().toString())});
  }
  public getNoticia(id: number): Observable<Noticia>  {
    return this.http
    .get(this.coneccionInfo.url_noticias + id.toString(), {headers: this.coneccionInfo.headers})
    .map( response =>   JSON.parse(response.text().toString()) as Noticia) ;

  }
  public crearNoticia(noticia: Noticia): Promise<Noticia | JSON> {
    /*let myParams = new URLSearchParams();
    myParams.append('file', evento.imagen);*/
    var headersBetha = new Headers(this.coneccionInfo.headers);
    headersBetha.delete('Content-Type');
    var formData = new FormData();
    formData.append('titulo', noticia.titulo);
     console.log(formData );
    formData.append('resumen', noticia.resumen);
    formData.append('contenido', noticia.contenido);
    formData.append('usuarioRegistra', noticia.usuarioRegistra);
    
    formData.append('imagen', noticia.imagen);
    return this.http
    .post(this.coneccionInfo.url_noticias ,
       formData ,
        {headers: headersBetha,
        },
      )
    .toPromise()
    .then(response =>   {
      console.log(response.text());
      return (JSON.parse(response.text().toString()) as Noticia)  ; }  )
    .catch(response => {
      console.log(response.text());
      return  JSON.parse(response.text().toString());
    });
  }


  delteNoticia(noticia: Noticia) {
    return this.http
    .delete(this.coneccionInfo.url_eventos + noticia.id +  '/' , {headers: this.coneccionInfo.headers})
    .toPromise()
    .then(
      response => {
        console.log(response.text());
        return (JSON.parse(response.text().toString()) as Noticia);
      }
    )
    .catch(
      response => {
        return response;
      }
    );
  }
  actualizarNoticia(noticia: Noticia): Promise<Noticia | JSON> {
    var headersBetha = new Headers(this.coneccionInfo.headers);
    headersBetha.delete('Content-Type');
    let formData = new FormData();
    formData.append('titulo', noticia.titulo);
    formData.append('resumen', noticia.resumen);
    formData.append('contenido', noticia.contenido);
    formData.append('usuarioRegistra', noticia.usuarioRegistra);
    formData.append('imagen', noticia.imagen);
     return this.http
    .put(this.coneccionInfo.url_noticias + noticia.id +  '/', formData ,
     {headers: headersBetha})
    .toPromise()
    .then(
      response => {
        console.log(response.text());
        return (JSON.parse(response.text().toString()) as Noticia);
      }
    )
    .catch(
      response => {
        console.log(response.text());
        return (JSON.parse(response.text().toString()));
      }
    );
  }
}
