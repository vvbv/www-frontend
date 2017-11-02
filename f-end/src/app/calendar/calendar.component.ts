import { Component, OnInit } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: [
      './calendar.component.css',
      /*'node_modules/angular-calendar/dist/css/angular-calendar.css'*/
    ]
})
export class CalendarComponent implements OnInit {
  viewDate: Date = new Date();
  events = [];
  constructor() { }

  ngOnInit() {
  }

}
