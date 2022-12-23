import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetCardComponent } from './tweet-card.component';
import { Tweet } from '../dashboard.model';
import { TweetType } from '../dashboard.enum';

describe('TweetCardComponent', () => {
  let component: TweetCardComponent;
  let fixture: ComponentFixture<TweetCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TweetCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetCardComponent);
    component = fixture.componentInstance;
    component.tweet = {
      name: 'Test Name',
      username: '@TestUsername',
      avatar: '73hZDYK',
      message: 'test text',
      created_at: 1670959872000,
      type: TweetType.Tweet,
    } as Tweet;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generate complete avatar URL', () => {
    const avatarUrl = 'https://i.imgur.com/';
    expect(component.userAvatarWithPath).toEqual(avatarUrl + component.tweet.avatar + '.png');
  });
});
