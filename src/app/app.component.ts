import {Component, OnInit} from "@angular/core";
import {CalendarService} from "./calendar.service";
import {Calendar} from "./calendar";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CalendarService]

})
export class AppComponent implements OnInit {
  calendar = new Calendar;

  constructor(private calendarService: CalendarService) {
  }

  getCalendar(): void {
    this.calendarService.getCalendar(2017)
      .subscribe(calendar => this.calendar = calendar);
  }

  ngOnInit(): void {
    this.getCalendar();
  }
}
