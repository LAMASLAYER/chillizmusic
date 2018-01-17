import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MusicsService} from '../../services/musics.service';
import {Musics} from '../../models/musics';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  private musicsService: MusicsService;
  public musics: Array<Musics>;
  public allMusics: Array<Musics>;
  public term: string;
  public displayAll: boolean;

  // @ViewChild('openModal') openModal: ElementRef;
  // public liked: boolean;

  constructor(musicService: MusicsService) {
    this.musicsService = musicService;
  }

  ngOnInit() {
    this.musics = [];
    this.allMusics = [];
    this.loadMusics();
    // if (localStorage.getItem('liked') !== 'true') {
    //   this.openModal.nativeElement.click();
    // }
  }

  private loadMusics(): void {
    this.musicsService.getMusics().subscribe(
      data => {
        this.musics.push(data[0]);
        this.musics.push(data[1]);
        for (let i = 2; i < data.length; i ++) {
          this.allMusics.push(data[i]);
        }
      }
    );
  }

  public showAll(): void {
    this.displayAll = true;
  }
}
