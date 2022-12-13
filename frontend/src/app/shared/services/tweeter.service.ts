import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tweet } from '../components/dashboard/dashboard.model';

@Injectable({
  providedIn: 'root',
})
export class TweeterService {
  private baseURL = '/api';

  constructor(private http: HttpClient) {}

  public printLine(stringToPrint: string): void {
    console.log('Printed from TweeterService: ' + stringToPrint);
  }

  public getTweets(): Observable<Tweet[]> {
    const url = `${this.baseURL}/tweet/all`;
    return this.http.get<Tweet[]>(url);
  }

  public postTweet(tweet: Tweet): Observable<Tweet> {
    const body = tweet;
    const url = `${this.baseURL}/tweet`;

    return this.http.post<Tweet>(url, body);
  }
}
