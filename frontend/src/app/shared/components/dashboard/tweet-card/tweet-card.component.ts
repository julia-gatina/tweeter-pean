import { Component, Input, OnInit } from '@angular/core';
import { Tweet } from '../dashboard.model';

@Component({
  selector: 'bf-tweet-card',
  templateUrl: './tweet-card.component.html',
  styleUrls: ['./tweet-card.component.scss'],
})
export class TweetCardComponent implements OnInit {
  @Input() public tweet: Tweet;

  public userAvatarWithPath: string;

  constructor() {}

  ngOnInit(): void {
    const avatar = this.tweet?.avatar;
    if (avatar) {
      const avatarUrl = 'https://i.imgur.com/';
      this.userAvatarWithPath = avatarUrl + avatar + '.png';
    }
  }
}
