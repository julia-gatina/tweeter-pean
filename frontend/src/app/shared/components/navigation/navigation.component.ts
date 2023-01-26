import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'bf-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  //will be replaced with user logged in verification
  @Input() public userLoggedIn: boolean;
  @Output() newTweetClicked = new EventEmitter();

  constructor() {}

  public onNewTweetLinkClick(): void {
    this.newTweetClicked.emit();
  }
}
