import { Component, OnInit, ViewChild } from '@angular/core';
import { Options } from 'fullcalendar';
import { CalendarComponent } from 'ng-fullcalendar';
import { GeneralService } from '../services/general.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild(CalendarComponent) calendar: CalendarComponent;
  calendarOptions: Options = {};
  calendarEvents;

  constructor(private generalService: GeneralService) { }

  ngOnInit() {
    this.generalService.getGoogleCalendarEvents((data) => {
      this.calendarEvents = data;

      this.calendarOptions = {
        editable: false,
        events: this.calendarEvents,
        eventLimit: false,
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay,listMonth'
        },
      };
    });

    // For some reason, updating the calendar events outside of the calendar events call
    // makes it actually work, so don't touch this line or the calendar will be broken.
    this.calendar.updateEvent({});
  }
}
