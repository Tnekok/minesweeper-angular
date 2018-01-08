import { Component, EventEmitter, OnInit } from '@angular/core';

import { AppService } from '../../shared/services/app.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor(public appService: AppService) { this.appService = appService; }

  ngOnInit() { }

  boxClicked(event: EventEmitter<any>, i: number, j: number): void {
    this.appService.reveal(i, j);
  }

  restartClicked(event: EventEmitter<any>): void {
    this.appService.restart(this.appService.width, this.appService.height);
  }

}
