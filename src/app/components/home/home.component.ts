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

  // @ViewChild('openModal') openModal: ElementRef;
  // public liked: boolean;

  constructor(musicService: MusicsService) {
    this.musicsService = musicService;
  }

  ngOnInit() {
    this.loadMusics();
    // if (localStorage.getItem('liked') !== 'true') {
    //   this.openModal.nativeElement.click();
    // }
  }

  private loadMusics() {
    this.musicsService.getMusics().subscribe(
      data => {
        this.musics = data;
      }
    );
  }
}
