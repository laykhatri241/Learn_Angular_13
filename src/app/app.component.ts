import { Component } from '@angular/core';
import { gaming } from './gaming.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'learning_angular';

  games = ['Dota2', 'CSGO', 'Rainbow Six Siege'];

  model = new gaming(1, 'Lay', this.games[1]);

  isSubmitted = false;

  onSubmit() {
    this.isSubmitted = true;
  }
}
