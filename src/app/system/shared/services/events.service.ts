import {Injectable} from '@angular/core';
import {BaseApi} from '../../../shared/core/base-api';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {WFMEvent} from '../models/event.model';

@Injectable()
export class EventsService extends BaseApi {
  constructor(http: HttpClient) {
    super(http);
  }

  addEvent(event: WFMEvent):Observable<any> {
    return this.post('events', event);
  }

  getEvents():Observable<any> {
    return this.get('events');
  }
}
