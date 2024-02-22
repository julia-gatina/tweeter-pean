import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetHeaderComponent } from './tweet-header.component';

describe('TweetHeaderComponent', () => {
  let component: TweetHeaderComponent;
  let fixture: ComponentFixture<TweetHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TweetHeaderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
