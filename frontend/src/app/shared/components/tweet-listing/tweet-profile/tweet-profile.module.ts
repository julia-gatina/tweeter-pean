import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TweetProfileComponent } from './tweet-profile.component';

@NgModule({
  declarations: [TweetProfileComponent],
  imports: [CommonModule, FormsModule],
  exports: [TweetProfileComponent],
  providers: [],
})
export class TweetProfileModule {}
