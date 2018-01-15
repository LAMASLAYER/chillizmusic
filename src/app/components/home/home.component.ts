import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // @ViewChild('openModal') openModal: ElementRef;
  // public liked: boolean;

  constructor() { }

  ngOnInit() {
    // if (localStorage.getItem('liked') !== 'true') {
    //   this.openModal.nativeElement.click();
    // }
  }

}
