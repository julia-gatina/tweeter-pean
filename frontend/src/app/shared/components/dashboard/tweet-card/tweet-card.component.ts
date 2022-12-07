import { Component, Input, OnInit } from '@angular/core';
import { Tweet } from '../dashboard.model';

@Component({
  selector: 'bf-tweet-card',
  templateUrl: './tweet-card.component.html',
  styleUrls: ['./tweet-card.component.scss'],
})
export class TweetCardComponent implements OnInit {
  @Input() public tweet: Tweet;

  public createdAtMsg: string;

  constructor() {}

  ngOnInit(): void {
    if (this.tweet.created_at) {
      const createdAtDate = new Date(this.tweet.created_at);
      this.createdAtMsg = 'Created at: ' + createdAtDate.toDateString();
    }
  }
}
