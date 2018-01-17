import { Injectable } from '@angular/core';
import {GlobalService} from './global.service';
import {Musics} from '../models/musics';

@Injectable()
export class AdminService extends GlobalService {

  public addMusic(m: Musics): any {
    return this.http
      .post(this.server + '/musics', m);
  }

}
