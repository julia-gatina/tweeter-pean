import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { TweetListingModule } from '../tweet-listing/tweet-listing.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, TweetListingModule],
  exports: [DashboardComponent],
  providers: [],
})
export class DashboardModule {}
