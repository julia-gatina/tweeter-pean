import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetCardComponent } from './tweet-card.component';
import { Tweet } from '../dashboard.model';

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
      user: {
        name: 'Test Name',
        avatars: 'https://example.com/img.png',
        handle: '@TestHandle',
      },
      created_at: 1670445286,
      content: {
        text: 'test text',
      },
    } as Tweet;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generate createdAtMsg', () => {
    expect(component.createdAtMsg).toEqual('Created at: Tue Jan 20 1970');
  });
});
