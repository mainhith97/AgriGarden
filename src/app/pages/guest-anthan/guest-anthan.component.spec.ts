import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestAnthanComponent } from './guest-anthan.component';

describe('GuestAnthanComponent', () => {
  let component: GuestAnthanComponent;
  let fixture: ComponentFixture<GuestAnthanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestAnthanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestAnthanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
