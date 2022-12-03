import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TweeterService {
  private baseURL = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  public printLine(stringToPrint: string): void {
    console.log('Printed from TweeterService: ' + stringToPrint);
  }

  public getTweets(): Observable<any> {
    const url = `${this.baseURL}/test-db`;
    return this.http.get(url);
  }
}
