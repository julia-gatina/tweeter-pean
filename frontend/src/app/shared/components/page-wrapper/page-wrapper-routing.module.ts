import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageWrapperComponent } from './page-wrapper.component';
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
  {
    path: '',
    component: PageWrapperComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../welcome/welcome.module').then((m) => m.WelcomeModule),
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('../dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
        canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageWrapperRoutingModule {}
