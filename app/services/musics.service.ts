import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Musics} from '../models/musics';
import {GlobalService} from './global.service';
import 'rxjs/add/operator/map';

@Injectable()
export class MusicsService extends GlobalService {

  public musics: Array<Musics>;

  public getMusics(): Observable<Array<Musics>> {
    return this.http
      .get(this.server + '/musics')
      .map((res: Array<Musics>) => {
        this.musics = res;
        return this.musics;
      });
  }
}
