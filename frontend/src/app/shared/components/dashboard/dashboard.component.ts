import { Component } from '@angular/core';

@Component({
  selector: 'bf-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  public showTweetInput: boolean = false;

  constructor() {}

  public onSubmitTweet(tweetText: string): void {
    console.log(tweetText);
  }

  public toggleTweetInputForm(): void {
    this.showTweetInput = !this.showTweetInput;
  }
}
