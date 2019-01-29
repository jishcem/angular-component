import {Component, OnInit} from '@angular/core';
import {PromptService} from './prompt/prompt.service';
import {PromptModel} from './prompt/prompt.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'promptcomponent';

  constructor(protected prompt: PromptService) {}

  showPrompt() {
    this.prompt.showConfirm();
  }

  ngOnInit(): void {
    const subscription = this.prompt.value().subscribe(result => {
      if ( result ) {
        console.log('You agreed');
      } else {
        console.log('You did not agree');
      }
    });
  }
}
