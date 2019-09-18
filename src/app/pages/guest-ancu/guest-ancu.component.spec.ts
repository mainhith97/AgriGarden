import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestAncuComponent } from './guest-ancu.component';

describe('GuestAncuComponent', () => {
  let component: GuestAncuComponent;
  let fixture: ComponentFixture<GuestAncuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestAncuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestAncuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
