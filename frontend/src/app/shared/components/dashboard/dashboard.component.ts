import { Component, OnInit } from '@angular/core';
import { TweeterService } from '../../services/tweeter.service';
import { Tweet } from './dashboard.model';

@Component({
  selector: 'bf-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public showTweetInput: boolean = false;
  public tweets: Tweet[];
  public tweet: Tweet;

  constructor(private tweeterService: TweeterService) {}

  ngOnInit() {
    this.loadTweets();
  }

  public onSubmitTweet(tweetText: string): void {
    console.log(tweetText);
    this.tweet = {
      user: { handle: '@test', name: 'Test User' },
      content: { text: tweetText },
    } as any;

    this.tweeterService.postTweet(this.tweet).subscribe(
      (successResponse: Tweet) => {
        //success
        this.tweets.unshift(successResponse);
      },
      (errorResponse) => {
        console.log('Error in post tweet', JSON.stringify(errorResponse));
      }
    );
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
