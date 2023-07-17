import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreadCardComponent } from './thread-card.component';

describe('ThreadCardComponent', () => {
  let component: ThreadCardComponent;
  let fixture: ComponentFixture<ThreadCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThreadCardComponent]
    });
    fixture = TestBed.createComponent(ThreadCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
