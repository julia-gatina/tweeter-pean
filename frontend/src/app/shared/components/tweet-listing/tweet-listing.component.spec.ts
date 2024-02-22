import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetListingComponent } from './tweet-listing.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('TweetListingComponent', () => {
  let component: TweetListingComponent;
  let fixture: ComponentFixture<TweetListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [TweetListingComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
