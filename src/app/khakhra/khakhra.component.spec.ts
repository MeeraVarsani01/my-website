import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhakhraComponent } from './khakhra.component';

describe('KhakhraComponent', () => {
  let component: KhakhraComponent;
  let fixture: ComponentFixture<KhakhraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KhakhraComponent]
    });
    fixture = TestBed.createComponent(KhakhraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
