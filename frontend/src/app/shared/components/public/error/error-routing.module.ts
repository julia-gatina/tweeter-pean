import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { GeneralErrorComponent } from './general-error/general-error.component';

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorRoutingModule {}
