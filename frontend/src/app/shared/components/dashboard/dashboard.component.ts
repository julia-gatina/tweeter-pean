import { Component } from '@angular/core';

@Component({
  selector: 'bf-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor() {}

  public onSubmitTweet(tweetText: string): void {
    console.log(tweetText);
  }
}
