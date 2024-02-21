import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bf-page-loader',
  templateUrl: './page-loader.component.html',
  styleUrls: ['./page-loader.component.scss'],
})
export class PageLoaderComponent {
  public loadingImg = 'https://cdn.auth0.com/blog/hello-auth0/loader.svg';

  constructor() {}
}
