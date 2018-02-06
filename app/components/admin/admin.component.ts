import { Component, OnInit } from '@angular/core';
import {Login} from '../../models/login';
import {GlobalService} from '../../services/global.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public selected: boolean;
  public selected2: boolean;
  public newLogin: Login;
  public globalService: GlobalService;

  constructor(globalService: GlobalService) {
    this.globalService = globalService;
    this.newLogin = new Login();
  }

  ngOnInit() {
  }

  public log() {
    if (this.newLogin.username === 'admin' && this.newLogin.password === 'admin') {
      this.globalService.router.navigate(['panel']);
    }
  }

}
