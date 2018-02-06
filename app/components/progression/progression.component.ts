import { Component, OnInit } from '@angular/core';
import {ReleaseService} from '../../services/release.service';

@Component({
  selector: 'app-progression',
  templateUrl: './progression.component.html',
  styleUrls: ['./progression.component.css']
})
export class ProgressionComponent implements OnInit {

  public mixing: number;
  public recording: number;
  public composing: number;
  public postProd: number;
  public releaseService: ReleaseService;

  constructor(releaseService: ReleaseService) {
    this.releaseService = releaseService;
  }

  ngOnInit() {
    this.loadRelease();
  }

  public loadRelease(): void {
    this.releaseService.getRelease().subscribe(
      res => {
        this.mixing = res['mixing'];
        this.recording = res['recording'];
        this.postProd = res['postProd'];
        this.composing = res['recording'];
        return [this.mixing, this.recording, this.postProd, this.composing];
      }
    );
  }
}
