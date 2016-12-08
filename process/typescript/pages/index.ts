//our root app component
import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  styleUrls: ['css/app.css'],
  templateUrl: 'partials/app.html'
  // template: `
  //   <button (click)="add()">Add</button>
  //   <div *ngFor="let item of items">
  //     <p>$ {{item}}</p>
  //   </div>
  // `
})
export class AppComponent {
  id = 'qDuKsiwS5xw';
  private player;
  private ytEvent;
  timeList = [
    {
      start: '120',
      end: '840'
    },
    {
      start: '924',
      end: '926'
    },
    {
      start: '1877',
      end: '3754'
    }
  ];

  constructor() {}

  // Interface Functions
  add() {
    this.timeList.push({start:'1776', end:'1777'});
    console.log(this.timeList);
  }

  delete(e) {
    this.timeList.splice(0, 1);
    console.log(this.timeList);
  }


  // // Deep functions

  // onStateChange(event) {
  //   this.ytEvent = event.data;
  // }
  // savePlayer(player) {
  //   this.player = player;
  // }
  
  // playVideo() {
  //   this.player.playVideo();
  // }
  
  // pauseVideo() {
  //   this.player.pauseVideo();
  // }

  // deets() {
  //   console.log('++++ PLAYER:', this.player);
  //   console.log('current time', this.player.getCurrentTime());
  //   // console.log('thi');
  // }
  // seek() {
  //   this.player.seekTo(20)
  // }
  // change() {
  //   this.player.cueVideoById('6twEdvyvadg')
  // }


}