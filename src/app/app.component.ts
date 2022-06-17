import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'learning_angular';

  nameInput = '';

  YourName = new FormGroup({
    Name: new FormControl(this.nameInput, [
      Validators.required,
      Validators.minLength(4),
    ]),
  });

  get Name() {
    return this.YourName.get('Name');
  }
}
