import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'bf-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  @Output() toggleTweetInput = new EventEmitter();
  constructor() {}

  public onNewTweetLinkClick(): void {
    this.toggleTweetInput.emit();
  }
}
