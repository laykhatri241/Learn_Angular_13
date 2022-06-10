import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'learning_angular';

  clickedMe(): void {
    console.log('Clicked Me!!!');
  }

  handleEmit(value: string): void {
    console.log('Received: ' + value);
  }
}
