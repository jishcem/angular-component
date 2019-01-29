import { Injectable } from '@angular/core';
import {Observable, ReplaySubject, Subject} from 'rxjs';
import {MatDialog} from '@angular/material';
import {PromptComponent} from './prompt.component';
import {PromptModel} from './prompt.model';

@Injectable({
  providedIn: 'root'
})
export class PromptService {

  private result: Subject<boolean> = new Subject();
  public result$: Observable<boolean> = this.result.asObservable();

  constructor(public dialog: MatDialog) {}

  defaultData: PromptModel = {
    title: 'Confirm',
    description: 'Are you sure you want to do this?'
  };

  showConfirm(data: PromptModel = this.defaultData) {
    const dialogRef = this.dialog.open(PromptComponent, {
      height: '200px',
      width: '350px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.result.next(true);
      } else {
        this.result.next(false);
      }
    });
  }

  value() {
    return this.result$;
  }
}
