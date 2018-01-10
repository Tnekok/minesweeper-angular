import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatDialogModule } from '@angular/material';

import { AppDialogComponent } from './app-dialog/app-dialog.component';

import { DropdownDirective } from './directives/dropdown.directive';

@NgModule({
    declarations: [ DropdownDirective, AppDialogComponent ],
    imports: [ MatIconModule, MatDialogModule, CommonModule, BrowserAnimationsModule ],
    exports: [
        CommonModule,
        DropdownDirective
    ]
})
export class SharedModule { }
