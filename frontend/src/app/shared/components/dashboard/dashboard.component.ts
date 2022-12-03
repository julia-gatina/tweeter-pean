import { Component } from '@angular/core';
import { TweeterService } from '../../services/tweeter.service';

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
    this.tweeterService.printLine('Test line printed');
  }
}
