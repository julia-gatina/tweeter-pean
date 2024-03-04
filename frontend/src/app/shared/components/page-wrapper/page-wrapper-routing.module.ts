import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageWrapperComponent } from './page-wrapper.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { AuthGuardEmailVerified } from '../../services/auth/auth-guard-email-verified.service';
import { AuthGuardHasPermission } from '../../services/auth/auth-guard-has-permission.service';
import { AuthPermissions } from './page-wrapper-routing.interface';

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
        canActivate: [
          AuthGuard,
          AuthGuardEmailVerified,
          AuthGuardHasPermission,
        ],
        data: {
          permissions: ['read:test-admin-message'],
        } as AuthPermissions,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageWrapperRoutingModule {}
