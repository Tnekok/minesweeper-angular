import { NgModule } from '@angular/core';
import { MatIconModule, MatDialogModule } from '@angular/material';

import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';

import { GameComponent } from './game/game.component';
import { MineComponent } from './game/mine/mine.component';
import { HeaderComponent } from './header/header.component';
import { AppDialogComponent } from '../shared/app-dialog/app-dialog.component';

import { AppService } from '../shared/services/app.service';

@NgModule({
    declarations: [ GameComponent, HeaderComponent, MineComponent ],
    imports: [
        SharedModule,
        AppRoutingModule,
        MatIconModule,
        MatDialogModule
    ],
    exports: [ AppRoutingModule, HeaderComponent ],
    providers: [ AppService ],
    entryComponents: [ AppDialogComponent ]
})
export class CoreModule { }
