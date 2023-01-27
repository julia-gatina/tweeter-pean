import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationOpenComponent } from './navigation-open.component';

describe('NavigationOpenComponent', () => {
  let component: NavigationOpenComponent;
  let fixture: ComponentFixture<NavigationOpenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavigationOpenComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
