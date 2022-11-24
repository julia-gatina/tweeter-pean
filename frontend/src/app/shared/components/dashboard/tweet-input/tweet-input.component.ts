import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'bf-tweet-input',
  templateUrl: './tweet-input.component.html',
  styleUrls: ['./tweet-input.component.scss'],
})
export class TweetInputComponent implements OnInit {
  @Output() submitTweet: EventEmitter<string> = new EventEmitter();

  public charsCounterToDisplay: number;
  public readonly CHAR_COUNTER_MAX_VALUE: number = 140;
  public newTweetText: string;
  public errorMsg: string;

  constructor() {}

  ngOnInit(): void {
    this.charsCounterToDisplay = 140;
  }

  public onKeyUp(): void {
    // decrease counter
    this.charsCounterToDisplay = this.CHAR_COUNTER_MAX_VALUE - this.newTweetText.length;

    if (this.charsCounterToDisplay < 0) {
      this.errorMsg = 'Your tweet is too long';
    } else {
      this.errorMsg = '';
    }
  }

  public onTweetBtnClick(): void {
    const inputValue = this.newTweetText.trim();

    if (!inputValue) {
      this.errorMsg = 'Input can not be empty';
      this.newTweetText = '';
    } else {
      this.errorMsg = '';
      this.newTweetText = '';
      this.submitTweet.emit(inputValue);
    }
  }
}
