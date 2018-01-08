import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { SettingsModule } from './settings/settings.module';
import { InstructionsModule } from './instructions/instructions.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    SettingsModule,
    InstructionsModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
