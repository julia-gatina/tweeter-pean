import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetProfileComponent } from './tweet-profile.component';

describe('TweetProfileComponent', () => {
  let component: TweetProfileComponent;
  let fixture: ComponentFixture<TweetProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TweetProfileComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
