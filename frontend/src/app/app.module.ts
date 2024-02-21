import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './shared/components/dashboard/dashboard.module';
import { HomeModule } from './shared/components/home/home.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import Auth0 SDK
import { AuthModule } from '@auth0/auth0-angular';
import { PageLoaderComponent } from './shared/components/page-loader/page-loader.component';

@NgModule({
  declarations: [AppComponent, PageLoaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    HomeModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AuthModule.forRoot({
      domain: 'dev-3dmw7mfdtmcpdyzg.us.auth0.com',
      clientId: '5uVZgb9pIWU1nRR0iENwjLau2zD6ABGJ',
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
