import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Event } from '../eventos/evento';
@Injectable()
class EventosService {
  constructor( private http: Http, private authenticationService: AuthenticationService ) { }
  getEventos(): any {}
  saveEvento(event: Event) {}
  deleteEvent(event: Event) {}
  updateEvent(event: Event) {}
}
