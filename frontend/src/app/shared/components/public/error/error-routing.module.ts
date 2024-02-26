import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { GeneralErrorComponent } from './general-error/general-error.component';
import { EmailNotVerifiedComponent } from './email-not-verified/email-not-verified.component';

const routes: Routes = [
  {
    path: '',
    component: GeneralErrorComponent,
    loadChildren: () =>
      import('./general-error/general-error.module').then(
        (m) => m.GeneralErrorModule
      ),
  },
  {
    path: 'unauthorized',
    component: UnauthorizedComponent,
    loadChildren: () =>
      import('./unauthorized/unauthorized.module').then(
        (m) => m.UnauthorizedModule
      ),
  },
  {
    path: 'email-not-verified',
    component: EmailNotVerifiedComponent,
    loadChildren: () =>
      import('./email-not-verified/email-not-verified.module').then(
        (m) => m.EmailNotVerifiedModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorRoutingModule {}
