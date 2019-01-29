import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {PromptModel} from './prompt.model';

@Component({
  selector: 'app-prompt',
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.css']
})
export class PromptComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<PromptComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PromptModel
  ) { }

  ngOnInit() {}

}
