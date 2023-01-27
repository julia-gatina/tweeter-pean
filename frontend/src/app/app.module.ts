import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './shared/components/dashboard/dashboard.module';
import { HomeModule } from './shared/components/home/home.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, DashboardModule, HomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
