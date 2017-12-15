import {
  OnInit,
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
  getISOWeek
} from 'date-fns';
import { Subject } from 'rxjs/Subject';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomDateFormatter } from './customConfig.class';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarDateFormatter, DateFormatterParams ,
  CalendarEventTimesChangedEvent,
  DAYS_OF_WEEK
} from 'angular-calendar';
import { Actividad } from 'app/modelos/actividad.class';
import { ActividadService } from '../../servicios/actividad.service';
import { Usuario } from '../../modelos/usuario.class';
import { UsuarioService } from 'app/servicios/usuario.service';

const colors: any = [{
    primary: '#ad2121',
    secondary: '#FAE3E3'
  }, {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  }, {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  },
  {
    primary: '#FDF1BA',
    secondary: '#e3bc08'
  }
];
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: [
      './calendar.component.scss',
      /*'node_modules/angular-calendar/dist/css/angular-calendar.css'*/
    ],
    providers: [
      {
        provide: CalendarDateFormatter,
        useClass: CustomDateFormatter
      }
    ]
})




export class CalendarComponent  implements OnInit{
  @ViewChild('modalContent') modalContent: TemplateRef<any>;
    view = 'month';
    locale = 'es';

    public actividades$: Promise<Actividad[]>;
    public usuarioLogueado$: Promise<Usuario>;
      viewDate: Date = new Date();
  
      weekStartsOn: number = DAYS_OF_WEEK.MONDAY;
    
      weekendDays: number[] = [DAYS_OF_WEEK.FRIDAY, DAYS_OF_WEEK.SATURDAY];
    modalData: {
      action: string;
      event: CalendarEvent;
    };
    public actions: CalendarEventAction[] = [
      {
        label: '<i class="fa fa-fw fa-pencil"></i>',
        onClick: ({ event }: { event: CalendarEvent }): void => {
          this.handleEvent('Edited', event);
        }
      },
      {
        label: '<i class="fa fa-fw fa-times"></i>',
        onClick: ({ event }: { event: CalendarEvent }): void => {
          this.events = this.events.filter(iEvent => iEvent !== event);
          this.handleEvent('Deleted', event);
        }
      }
    ];
    refresh: Subject<any> = new Subject();
    public events: CalendarEvent[];
    activeDayIsOpen = true;
    constructor(private modal: NgbModal, 
      private activadService: ActividadService,
    private usuarioService: UsuarioService) {
      this.events = new Array<CalendarEvent>();
    }
    dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
      if (isSameMonth(date, this.viewDate)) {
        if (
          (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
          events.length === 0
        ) {
          this.activeDayIsOpen = false;
        } else {
          this.activeDayIsOpen = true;
          this.viewDate = date;
        }
      }
    }
    eventTimesChanged({
      event,
      newStart,
      newEnd
    }: CalendarEventTimesChangedEvent): void {
      event.start = newStart;
      event.end = newEnd;
      this.handleEvent('Dropped or resized', event);
      this.refresh.next();
    }
    handleEvent(action: string, event: CalendarEvent): void {
      this.modalData = { event, action };
      this.modal.open(this.modalContent, { size: 'lg' });
    }
    addEvent(): void {
      this.events.push({
        title: 'New event',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: colors.red,
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true
        }
      });
      this.refresh.next();
    }
    initCalendarEventsFromActivities(actividades: Actividad[]): void {

      for (var i = 0; i < actividades.length ; i++){
        console.log(new Date(actividades[i].fechaInicio));
    this.events.push({
      start: subDays(startOfDay(new Date(actividades[i].fechaInicio)), 1),
      end: addDays(new Date(actividades[i].fechaFinalizacion), 1),
      title: actividades[i].nombre,
      color: colors[i],
      actions: this.actions
    });
    this.refresh.next();
      }
    }
    ngOnInit(){
      this.usuarioLogueado$ = this.usuarioService.obtenerUsuarioActualCache();
      this.usuarioService.obtenerUsuarioActualCache()
      .then(response => {
        let usuarioActual: Usuario  = response;
        this.actividades$ = this.activadService.getActividadesByUser(usuarioActual);
        this.activadService.getActividadesByUser(usuarioActual)
        .then(response =>{
          this.initCalendarEventsFromActivities(response as Actividad[]);
        })
      }).catch();
    }
}
