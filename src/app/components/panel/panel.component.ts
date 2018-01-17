import { Component, OnInit } from '@angular/core';
import {Musics} from '../../models/musics';
import {AdminService} from '../../services/admin.service';
import {GlobalService} from '../../services/global.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {


  public newMusic: Musics;
  public adminService: AdminService;
  public ok: boolean;
  private globalService: GlobalService;

  constructor(adminService: AdminService, globalService: GlobalService) {
    this.newMusic = new Musics();
    this.adminService = adminService;
    this.globalService = globalService;
  }

  ngOnInit() {
    this.ok = false;
  }

  public addMusic(): void {
    this.adminService.addMusic(this.newMusic).subscribe(
      res => {
       this.ok = true;
      });
  }
  public toBoard() {
    this.globalService.router.navigate(['/']);
  }

  public reloadMusic() {
    this.newMusic = new Musics();
  }
}
