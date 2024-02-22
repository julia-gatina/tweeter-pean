import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageWrapperRoutingModule } from './page-wrapper-routing.module';
import { PageWrapperComponent } from './page-wrapper.component';
import { NavigationBarModule } from '../navigation-bar/navigation-bar.module';

@NgModule({
  declarations: [PageWrapperComponent],
  imports: [CommonModule, PageWrapperRoutingModule, NavigationBarModule],
})
export class PageWrapperModule {}
