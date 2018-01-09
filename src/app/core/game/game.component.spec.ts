import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material';

import { GameComponent } from './game.component';
import { MineComponent } from './mine/mine.component';

import { AppService } from '../../shared/services/app.service';

class MockedService {
  reveal = jasmine.createSpy('reveal');
  restart = jasmine.createSpy('restart');
}

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameComponent, MineComponent ],
      imports: [ MatIconModule ],
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
