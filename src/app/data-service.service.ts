import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  constructor(private http: HttpClient) {}

  headerOptions = {
    Accept: 'application/json',
  };

  getData() {
    return this.http.get('https://icanhazdadoke.com/').pipe(
      catchError((err) => {
        console.log(err);
        return 'Error';
      })
    );
  }
}
