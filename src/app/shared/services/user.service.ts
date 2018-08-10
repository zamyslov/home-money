import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {User} from '../models/user.module';
import {BaseApi} from '../core/base-api';

@Injectable()
export class UserService extends BaseApi {
  constructor(public http: HttpClient) {
    super(http);
  }

  getUserByEmail(email: string): Observable<any> {
    return this.get(`users?email=${email}`).pipe(map((user: User[]) => user[0] ? user[0] : undefined));
  }

  createNewUser(user: User): Observable<any> {
    return this.post('users', user);
  }
}
