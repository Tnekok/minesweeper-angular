import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material';

import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';

import { GameComponent } from './game/game.component';
import { MineComponent } from './game/mine/mine.component';
import { HeaderComponent } from './header/header.component';

import { AppService } from '../shared/services/app.service';

@NgModule({
    declarations: [ GameComponent, HeaderComponent, MineComponent ],
    imports: [
        SharedModule,
        AppRoutingModule,
        MatIconModule
    ],
    exports: [ AppRoutingModule, HeaderComponent ],
    providers: [ AppService ]
})
export class CoreModule { }
