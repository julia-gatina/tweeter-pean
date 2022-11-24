import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { ProfileComponent } from './profile/profile.component';
import { TweetCardComponent } from './tweet-card/tweet-card.component';
import { TweetInputComponent } from './tweet-input/tweet-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DashboardComponent, NavigationComponent, ProfileComponent, TweetCardComponent, TweetInputComponent],
  imports: [CommonModule, FormsModule],
  exports: [DashboardComponent],
})
export class DashboardModule {}
