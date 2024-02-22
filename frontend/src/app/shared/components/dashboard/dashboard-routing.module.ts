import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { TweetListingComponent } from './tweet-listing/tweet-listing.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  {
    path: 'tweets',
    component: TweetListingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
