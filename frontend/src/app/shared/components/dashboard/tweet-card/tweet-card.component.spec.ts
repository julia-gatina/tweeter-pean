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
    const user = {
      id: '4a96224c-8392-4cfe-b38f-a8384204cd41',
      name: 'Test Name',
      username: '@TestUsername',
      avatar: '73hZDYK',
    };
    component.tweet = {
      id: 'cabc7797-80bc-4c54-b15f-910fa8e40973',
      user: user,
      message: 'test text',
      type: TweetType.Tweet,
      created_at: 1670959872000,
    } as Tweet;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generate complete avatar URL', () => {
    const avatarUrl = 'https://i.imgur.com/';
    expect(component.userAvatarWithPath).toEqual(avatarUrl + component.tweet.user.avatar + '.png');
  });
});
