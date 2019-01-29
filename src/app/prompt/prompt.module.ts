import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromptComponent } from './prompt.component';
import {MatDialogModule} from '@angular/material';

@NgModule({
  declarations: [PromptComponent],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  entryComponents: [PromptComponent]
})
export class PromptModule { }
