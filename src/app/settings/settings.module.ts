import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material';

import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';

import { SettingsComponent } from './settings.component';

@NgModule({
    declarations: [ SettingsComponent ],
    imports: [ SharedModule ],
    providers: [ ]
})
export class SettingsModule { }
