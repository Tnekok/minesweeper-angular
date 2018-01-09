import { TestBed, inject } from '@angular/core/testing';

import { AppService } from './app.service';

describe('AppService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ AppService ]
    });
  });

  it('should exist', inject([AppService], (service: AppService) => {
    expect(service).toBeTruthy();
  }));

  it('should reveal the value clicked and lose the game', inject([AppService], (service: AppService) => {
    for (let i = 0; i < service.width; i++) {
      for (let j = 0; j < service.height; j++) {
        if (service.space[i][j].getMine()) {
          service.space[i][j].setRevealed(true);
          service.reveal(i, j);
        }
        service.reveal(i, j);
      }
    }
    expect(service.lost).toBeTruthy();
  }));

  it('should reveal the value clicked and win the game', inject([AppService], (service: AppService) => {
    for (let i = 0; i < service.width; i++) {
      for (let j = 0; j < service.height; j++) {
        service.space[i][j].setDanger(0);
        service.space[i][j].setRevealed(true);
        service.revealedCount = service.width * service.height - service.minesCount;
        service.reveal(i, j);
      }
    }
    expect(service.won).toBeTruthy();
  }));

});
