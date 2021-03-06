import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BaseApi} from '../../../shared/core/base-api';
import {Bill} from '../models/bill.model';

@Injectable()
export class BillService extends BaseApi {
  constructor(public http: HttpClient) {
    super(http);
  }

  getBill(): Observable<any> {
    return this.get('bill');
  }

  getCurrency(base: string = 'UAH'): Observable<any> {
    return this.http.get(`http://www.floatrates.com/daily/${base}.json`);
  }

  updateBill(bill: Bill): Observable<any> {
    return this.put('bill', bill);
  }

}
