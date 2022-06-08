import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  template: '<h1>{{title}}</h1>',
  styles: [
    `
      h1 {
        color: cyan;
      }
    `,
  ],
})
export class HelloWorldComponent implements OnInit, OnDestroy {
  title = 'Hello World';
  autolog: any;

  ngOnInit(): void {
    this.autolog = setInterval(() => {
      console.log('Hello');
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.autolog) {
      clearInterval(this.autolog);
    }
  }
}
