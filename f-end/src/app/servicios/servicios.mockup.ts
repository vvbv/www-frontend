import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Type } from '@angular/core/src/type';
import { ConeccionInfo } from './coneccion.info';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
@Injectable()
export class MockupServicios{

    constructor(
        private http: Http,
        private coneccionInfo: ConeccionInfo
    ){

    }
    public get<T>(url: string): Promise<T>{
        return this.http
        .get(url, {headers: this.coneccionInfo.headers})
        .toPromise()
        .then(
            response =>  {
                return (JSON.parse(response.text().toString()) as T);
            })
            .catch(response => {console.log(response); return response});
    }
}