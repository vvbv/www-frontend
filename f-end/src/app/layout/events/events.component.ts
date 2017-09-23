import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

import {FormControl} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

import 'hammerjs';

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.scss'],
    animations: [routerTransition()]
})
export class EventsComponent implements OnInit {
    stateCtrl: FormControl;
    filteredStates: Observable<any[]>;
    states: any[] = [
      {
        name: 'Arkansas',
        population: '2.978M',
        // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
        flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
      }

    ];
    constructor() {
      this.stateCtrl = new FormControl();
      this.filteredStates = this.stateCtrl.valueChanges
          .startWith(null)
          .map(state => state ? this.filterStates(state) : this.states.slice());
    }
    filterStates(name: string) {
      return this.states.filter(state =>
        state.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
    }
    ngOnInit() {

    }
  }


