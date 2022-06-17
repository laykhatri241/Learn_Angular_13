import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'learning_angular';

  Name = new FormControl('');

  UserCreds = new FormGroup({
    UserName: new FormControl(''),
    PassWord: new FormControl(''),
  });

  updateName() {
    this.Name.setValue('Lay');
  }

  onSubmit() {
    console.log(this.UserCreds.value);
  }
}
