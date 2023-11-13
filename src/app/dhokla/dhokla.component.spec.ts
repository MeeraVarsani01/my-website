import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DhoklaComponent } from './dhokla.component';

describe('DhoklaComponent', () => {
  let component: DhoklaComponent;
  let fixture: ComponentFixture<DhoklaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DhoklaComponent]
    });
    fixture = TestBed.createComponent(DhoklaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
