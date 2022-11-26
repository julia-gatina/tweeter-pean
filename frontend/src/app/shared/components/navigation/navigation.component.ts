import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'bf-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  @Output() onNewTweetClicked = new EventEmitter();
  constructor() {}

  public onNewTweetLinkClick(): void {
    this.onNewTweetClicked.emit();
  }
}
