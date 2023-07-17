import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCardDetailComponent } from './modal-card-detail.component';

describe('ModalCardDetailComponent', () => {
  let component: ModalCardDetailComponent;
  let fixture: ComponentFixture<ModalCardDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalCardDetailComponent]
    });
    fixture = TestBed.createComponent(ModalCardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
