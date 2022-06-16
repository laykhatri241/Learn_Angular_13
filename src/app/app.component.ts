import { Component, OnInit } from '@angular/core';
import { LogService } from './log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'learning_angular';

  constructor(private logService: LogService) {}
  ngOnInit(): void {
    this.logService.logMessage('', 'Hello');
    this.logService.logMessage('Key', { Value: 'Hi' });
  }
}
