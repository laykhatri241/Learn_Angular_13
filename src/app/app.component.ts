import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [
    `
      #attribute {
        color: blue;
      }
    `,
  ],
})
export class AppComponent {
  title = 'learning_angular';
}
