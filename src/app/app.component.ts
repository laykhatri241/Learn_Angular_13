import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <p [ngClass]="isSpecial ? 'special' : ''">{{ title }}</p>
    <br />
    <h1 [ngStyle]="myStyle">{{ title }}</h1>
    <br />
    <input type="text" [(ngModel)]="title" />`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'learning_angular';
  isSpecial = true;
  myStyle = {
    background: 'blue',
    'text-decoration': 'underline',
  };
}
