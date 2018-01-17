import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()

export class GlobalService {

  public http: HttpClient;
  public server: string = 'http://localhost:3000';

  constructor(http: HttpClient) {
    this.http = http;
  }

}
