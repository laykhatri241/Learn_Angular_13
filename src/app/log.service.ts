import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  constructor() {}

  logMessage(Key: string = '', Value: any): void {
    console.log(Key, Value);
  }
}
