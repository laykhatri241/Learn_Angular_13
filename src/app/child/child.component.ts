import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Output() sendEmit = new EventEmitter();

  sendEmitMessage(): void {
    this.sendEmit.emit('Hello');
  }

  constructor() {}

  ngOnInit(): void {}
}
