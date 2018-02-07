import { Injectable } from '@angular/core';
import {GlobalService} from './global.service';
import {Release} from '../models/release';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ReleaseService extends GlobalService {

  public release: Release;

  public getRelease(): Observable<Object> {
    return this.http
      .get(this.server + '/release')
      .map((res: Release) => {
        this.release = res[0];
        console.log(this.release);
        return this.release;
        }
      );
  }

  public updateRelease(release: Release): Observable<Release> {
    return this.http
      .put<Release>(this.server + '/release' , release);

  }
}
