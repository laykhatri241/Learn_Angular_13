import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'learning_angular';

  showTitle = true;

  myList = ['hello', 'World', 'Focks'];

  names = { name: 'lay' };
}
