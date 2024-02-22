import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TweetListingComponent } from './tweet-listing.component';
import { TweetCardComponent } from './tweet-card/tweet-card.component';
import { TweetInputComponent } from './tweet-input/tweet-input.component';
import { FormsModule } from '@angular/forms';
import { TweetHeaderComponent } from './tweet-header/tweet-header.component';
import { TweetProfileModule } from './tweet-profile/tweet-profile.module';
import { NavigationBarModule } from '../../navigation-bar/navigation-bar.module';
import { TweeterService } from '../../../services/tweeter.service';

@NgModule({
  declarations: [
    TweetListingComponent,
    TweetHeaderComponent,
    TweetCardComponent,
    TweetInputComponent,
  ],
  imports: [CommonModule, FormsModule, TweetProfileModule, NavigationBarModule],
  exports: [TweetListingComponent],
  providers: [TweeterService],
})
export class TweetListingModule {}
