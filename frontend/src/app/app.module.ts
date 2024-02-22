import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment as env } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageLoaderComponent } from './shared/components/page-loader/page-loader.component';

// Import Auth0 SDK
// used following Guide from Auth0: https://developer.auth0.com/resources/guides/spa/angular/basic-authentication
import { AuthModule } from '@auth0/auth0-angular';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, PageLoaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    AuthModule.forRoot({
      ...env.auth0,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
