import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input()
  childMessage!: string;

  @Output() parentMessage = new EventEmitter();

  sendMessage() {
    this.parentMessage.emit('Hello From Child');
  }

  constructor() {}

  ngOnInit(): void {}
}
