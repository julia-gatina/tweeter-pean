import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NavigationBarModule } from '../navigation-bar/navigation-bar.module';
import { TweetListingModule } from '../tweet-listing/tweet-listing.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NavigationBarModule,
    TweetListingModule,
  ],
  exports: [DashboardComponent],
  providers: [],
})
export class DashboardModule {}
