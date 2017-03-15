import {Calendar} from "./calendar";
import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class CalendarService {
  private baseUrl: string = 'http://localhost:8080/';

  constructor(private http: Http) {
  }

  getCalendar(year: number): Observable<Calendar> {
    return this.http
      .get(this.baseUrl + 'calendar/' + year)
      .map(mapCalendar)
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));

  }
}

function mapCalendar(response: Response): Calendar {
  return toCalendar(response.json());
}

function toCalendar(jsonResponse: any): Calendar {
  let calendar = <Calendar>({
    name: jsonResponse.name,
    year: jsonResponse.year,
    races: jsonResponse.races
  });
  console.log('Parsed Calendar:', calendar);
  return calendar;
}


