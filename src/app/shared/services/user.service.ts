import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {User} from '../models/user.module';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {
  }

  getUserByEmail(email: string): Observable<any> {
    return this.http.get(`http://localhost:3000/users?email=${email}`)
      .pipe(map((user: User[]) => user[0]? user[0]: undefined));
  }
}
