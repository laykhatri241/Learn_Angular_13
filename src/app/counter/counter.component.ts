import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  @Input() counter!: number;
  @Output() counterChange = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  resize(value: number) {
    this.counter = this.counter + value;
    this.counterChange.emit(this.counter);
  }

  increase() {
    this.resize(1);
  }

  decrease() {
    this.resize(-1);
  }
}
