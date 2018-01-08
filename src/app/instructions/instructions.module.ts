import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material';

import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';

import { InstructionsComponent } from './instructions.component';

@NgModule({
    declarations: [ InstructionsComponent ],
    imports: [ SharedModule ],
    providers: [ ]
})
export class InstructionsModule { }
