import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { ProfileComponent } from './profile/profile.component';
import { TweetCardComponent } from './tweet-card/tweet-card.component';
import { TweetInputComponent } from './tweet-input/tweet-input.component';
import { FormsModule } from '@angular/forms';
import { TweeterService } from '../../services/tweeter.service';
import { HttpClientModule } from '@angular/common/http';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeModule } from '../home/home.module';

@NgModule({
  declarations: [
    DashboardComponent,
    NavigationComponent,
    ProfileComponent,
    TweetCardComponent,
    TweetInputComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    HttpClientModule,
    HomeModule,
  ],
  exports: [DashboardComponent],
  providers: [TweeterService],
})
export class DashboardModule {}
