import { Injectable } from '@angular/core';
import {GlobalService} from './global.service';
import {Musics} from '../models/musics';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AdminService extends GlobalService {

  public addMusic(m: Musics): Observable<Object> {
    return this.http
      .post(this.server + '/musics', m);
  }

}
