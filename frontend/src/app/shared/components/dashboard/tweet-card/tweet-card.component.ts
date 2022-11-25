import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bf-tweet-card',
  templateUrl: './tweet-card.component.html',
  styleUrls: ['./tweet-card.component.scss'],
})
export class TweetCardComponent implements OnInit {
  @Input() userName: string;
  @Input() avatars: string;
  @Input() handle: string;
  @Input() message: string;
  @Input() createdAtTimestamp: number;

  public createdAtMsg: string;

  private createdAtDate: Date;

  constructor() {}

  ngOnInit(): void {
    if (this.createdAtTimestamp) {
      this.createdAtDate = new Date(this.createdAtTimestamp);
      this.createdAtMsg = 'Created at: ' + this.createdAtDate.toDateString();
    }
  }
}
