import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TweetListingComponent } from './tweet-listing/tweet-listing.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'tweets',
    component: TweetListingComponent,
    loadChildren: () =>
      import('./tweet-listing/tweet-listing.module').then(
        (m) => m.TweetListingModule
      ),
  },
  {
    path: 'admin',
    component: AdminComponent,
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProtectedRoutingModule {}
