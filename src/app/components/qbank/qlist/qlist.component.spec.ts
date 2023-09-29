import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QlistComponent } from './qlist.component';

describe('QlistComponent', () => {
  let component: QlistComponent;
  let fixture: ComponentFixture<QlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QlistComponent]
    });
    fixture = TestBed.createComponent(QlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
