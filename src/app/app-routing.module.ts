import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GameComponent } from './core/game/game.component';
import { SettingsComponent } from './settings/settings.component';
import { InstructionsComponent } from './instructions/instructions.component';

const appRoutes: Routes = [
    { path: '', component: GameComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'instructions', component: InstructionsComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }
