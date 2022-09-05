import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { ProfileComponent } from './profile/profile.component';
import { TweetCardComponent } from './tweet-card/tweet-card.component';
import { TweetInputComponent } from './tweet-input/tweet-input.component';

@NgModule({
  declarations: [DashboardComponent, NavigationComponent, ProfileComponent, TweetCardComponent, TweetInputComponent],
  imports: [CommonModule],
  exports: [DashboardComponent],
})
export class DashboardModule {}
