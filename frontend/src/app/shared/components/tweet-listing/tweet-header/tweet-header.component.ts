import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'bf-tweet-header',
  templateUrl: './tweet-header.component.html',
  styleUrls: ['./tweet-header.component.scss'],
})
export class TweetHeaderComponent {
  @Output() newTweetClicked = new EventEmitter();
  constructor() {}

  public onNewTweetLinkClick(): void {
    this.newTweetClicked.emit();
  }
}
