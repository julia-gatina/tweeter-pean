import { Component } from '@angular/core';
import { TweeterService } from '../../services/tweeter.service';
import { Tweet } from './dashboard.model';

@Component({
  selector: 'bf-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  public showTweetInput: boolean = false;
  public tweets: Tweet[];

  constructor(private tweeterService: TweeterService) {}

  ngOnInit() {
    this.loadTweets();
  }

  public onSubmitTweet(tweetText: string): void {
    console.log(tweetText);
  }

  public toggleTweetInputForm(): void {
    this.showTweetInput = !this.showTweetInput;
  }

  private loadTweets(): void {
    this.tweeterService.getTweets().subscribe(
      (successResponse: Tweet[]) => {
        // success
        this.tweets = successResponse;
      },
      (errorResponse) => {
        // error
        console.log('error in API call: ' + JSON.stringify(errorResponse));
      }
    );
  }
}
