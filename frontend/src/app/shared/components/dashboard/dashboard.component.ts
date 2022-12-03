import { Component } from '@angular/core';
import { TweeterService } from '../../services/tweeter.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'bf-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  public showTweetInput: boolean = false;

  constructor(private tweeterService: TweeterService) {}

  public onSubmitTweet(tweetText: string): void {
    console.log(tweetText);
  }

  public toggleTweetInputForm(): void {
    this.showTweetInput = !this.showTweetInput;
  }

  ngOnInit() {
    this.tweeterService.getTweets().subscribe(
      (successResponse) => {
        // success
        this.tweeterService.printLine('getTweets returned: ' + successResponse);
      },
      (errorResponse) => {
        // error
        console.log('error in API call: ' + JSON.stringify(errorResponse));
      }
    );
  }
}
