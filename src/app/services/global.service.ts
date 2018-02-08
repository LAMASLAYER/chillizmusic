import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()

export class GlobalService {

  public router: Router;
  public http: HttpClient;
  public server: string = 'http://chilliz.herokuapp.com';

  constructor(http: HttpClient, router: Router) {
    this.http = http;
    this.router = router;
  }


}
