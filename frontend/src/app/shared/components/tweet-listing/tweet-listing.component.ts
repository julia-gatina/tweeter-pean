import { Component, OnInit } from '@angular/core';
import { TweeterService } from '../../services/tweeter.service';
import { Tweet } from './tweet-listing.model';
import { TweetType } from './tweet-listing.enum';

@Component({
  selector: 'bf-tweet-listing',
  templateUrl: './tweet-listing.component.html',
  styleUrls: ['./tweet-listing.component.scss'],
})
export class TweetListingComponent implements OnInit {
  public showTweetInput: boolean = false;
  public tweets: Tweet[];

  constructor(private tweeterService: TweeterService) {}

  ngOnInit() {
    this.loadTweets();
  }

  public onSubmitTweet(tweetText: string): void {
    const tweet: Tweet = {
      message: tweetText,
      type: TweetType.Tweet,
    } as any;

    this.tweeterService.postTweet(tweet).subscribe(
      //success
      (savedTweet: Tweet) => {
        this.tweets.unshift(savedTweet);
      },
      (error) => {
        console.log('Error in post tweet', JSON.stringify(error));
      }
    );
  }

  public toggleTweetInputForm(): void {
    this.showTweetInput = !this.showTweetInput;
  }

  public onDeleteTweet(tweetId: string): void {
    this.tweeterService.deleteTweet(tweetId).subscribe(
      (success) => {
        this.tweets = this.tweets.filter((tweet) => tweet.id !== tweetId);
      },
      (error) => {
        console.log('Error in delete tweet', JSON.stringify(error));
      }
    );
  }

  private loadTweets(): void {
    this.tweeterService.getTweets().subscribe(
      // success
      (tweets: Tweet[]) => {
        this.tweets = tweets;
      },
      (error) => {
        // error
        console.log('error in API call: ' + JSON.stringify(error));
      }
    );
  }
}
