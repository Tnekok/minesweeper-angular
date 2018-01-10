import { NgModule } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatDialogModule } from '@angular/material';
import { Subject } from 'rxjs/Subject';

import { GameComponent } from './game.component';
import { MineComponent } from './mine/mine.component';
import { AppDialogComponent } from '../../shared/app-dialog/app-dialog.component';

import { AppService } from '../../shared/services/app.service';
import { SharedModule } from '../../shared/shared.module';

class MockedService {
  reveal = jasmine.createSpy('reveal');
  restart = jasmine.createSpy('restart');
  isGamestatusChanged: Subject<{ isWon: boolean, isLost: boolean }> = new Subject<{ isWon: boolean, isLost: boolean }>();
}

@NgModule({
  imports: [ MatIconModule, MatDialogModule, CommonModule, BrowserAnimationsModule ],
  declarations: [ AppDialogComponent ],
  entryComponents: [ AppDialogComponent ]
})
export class FakeTestDialogModule { }

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameComponent, MineComponent ],
      imports: [ MatIconModule, FakeTestDialogModule ],
      providers: [
        { provide: AppService, useClass: MockedService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have called reveal() from the service', () => {
    component.boxClicked(1, 1);
    expect(component.appService.reveal).toHaveBeenCalled();
  });

  it('should have called restart() from the service', () => {
    component.restartClicked();
    expect(component.appService.restart).toHaveBeenCalled();
  });

});
