import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TweetListingComponent } from './tweet-listing.component';
import { TweetCardComponent } from './tweet-card/tweet-card.component';
import { TweetInputComponent } from './tweet-input/tweet-input.component';
import { FormsModule } from '@angular/forms';
import { TweeterService } from '../../services/tweeter.service';
import { HttpClientModule } from '@angular/common/http';
import { ProfiledModule } from './profile/profile.module';
import { NavigationBarModule } from '../navigation-bar/navigation-bar.module';
import { TweetHeaderComponent } from '../tweet-header/tweet-header.component';

@NgModule({
  declarations: [
    TweetListingComponent,
    TweetHeaderComponent,
    TweetCardComponent,
    TweetInputComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ProfiledModule,
    NavigationBarModule,
  ],
  exports: [TweetListingComponent],
  providers: [TweeterService],
})
export class TweetListingModule {}
