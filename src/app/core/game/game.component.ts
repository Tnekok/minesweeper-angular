import { Component, EventEmitter, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { AppDialogComponent } from '../../shared/app-dialog/app-dialog.component';

import { AppService } from '../../shared/services/app.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  public statusMessage = '';
  public statusImage = '';

  constructor(public appService: AppService, public dialog: MatDialog) { }

  ngOnInit() {
    this.appService.isGamestatusChanged.subscribe(
      newStatus => {
        if (newStatus.isLost) {
          this.statusMessage = 'Game Loss! Try again';
          this.statusImage = 'thumb_down';
          this.openDialog();
        }
        if (newStatus.isWon) {
          this.statusMessage = 'Game Won! Congrats';
          this.statusImage = 'thumb_up';
          this.openDialog();
        }
      }
    );
  }

  boxClicked(i: number, j: number): void {
    this.appService.reveal(i, j);
  }

  restartClicked(): void {
    this.appService.restart(this.appService.width, this.appService.height);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AppDialogComponent, {
      width: '250px',
      data: { event: this.statusMessage, image: this.statusImage }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.restartClicked();
    });
  }

}
