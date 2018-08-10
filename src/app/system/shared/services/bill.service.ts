import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class BillService {
  constructor(private http: HttpClient) {
  }

  getBill(): Observable<any> {
    return this.http.get('http://localhost:3000/bill');
      // .pipe(map((response: Response) => {
      //   response.json();
      // }));
  }

  getCurrency(base: string = 'UAH'): Observable<any> {
    return this.http.get(`http://www.floatrates.com/daily/${base}.json`);
    // return this.http.get(`https://data.fixer.io/api/latest
    // ?access_key=ee60ebb17b02ebe21e8895bac4e5741d&base=${base}`);
      // .pipe(map((response: Response) => {
      //   response.json();
      // }));

  }

}
