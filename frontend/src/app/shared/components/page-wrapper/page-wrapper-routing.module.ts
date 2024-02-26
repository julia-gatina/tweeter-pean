import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageWrapperComponent } from './page-wrapper.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { AuthGuardEmailVerified } from '../../services/auth/auth-guard-email-verified.service';

const routes: Routes = [
  {
    path: '',
    component: PageWrapperComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../public/public.module').then((m) => m.PublicModule),
      },
      {
        path: 'secured',
        loadChildren: () =>
          import('../protected/protected.module').then(
            (m) => m.ProtectedModule
          ),
        canActivate: [AuthGuard, AuthGuardEmailVerified],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageWrapperRoutingModule {}
